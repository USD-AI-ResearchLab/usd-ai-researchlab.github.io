// ============================================================
// Blog Database Service - Self-contained, NO third-party services
// ============================================================
// All data is stored in JSON files under /data/blog/
//   - users.json     -> authorized user roster (read-only)
//   - posts.json     -> all blog posts
//
// Passwords are stored in browser localStorage (per device).
// Blog post writes use the GitHub API (requires token for admins).
// ============================================================

// --- Types ---

export interface BlogUser {
  id: number;
  name: string;
  email: string;
  password_hash: string | null;
  password_hint: string | null;
  role: 'admin' | 'reviewer' | 'author';
  created_at: string;
  last_login: string | null;
  login_count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: 'draft' | 'pending' | 'published';
  author_id: number;
  author_name: string;
  author_email: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface LoginRecord {
  id: number;
  user_id: number;
  email: string;
  login_time: string;
  success: boolean;
}

export interface AuthResult {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'reviewer' | 'author';
  isReviewer: boolean;
  isAdmin: boolean;
}

// Thrown when user exists but has not set a password yet
export class NeedsRegistrationError extends Error {
  public userName: string;
  public userEmail: string;
  constructor(name: string, email: string) {
    super('NEEDS_REGISTRATION');
    this.userName = name;
    this.userEmail = email;
  }
}

// Thrown when user wants password hint
export class PasswordHintResult {
  public hint: string | null;
  public maskedEmail: string;
  constructor(hint: string | null, email: string) {
    this.hint = hint;
    const parts = email.split('@');
    const local = parts[0];
    const domain = parts[1];
    this.maskedEmail = local.charAt(0) + '***' + local.charAt(local.length - 1) + '@' + domain;
  }
}

// --- Failed Login Attempt Tracking (in-memory, resets on page reload) ---
const failedAttempts: Map<string, { count: number; lockedUntil: number }> = new Map();
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 5 * 60 * 1000;

function checkLockout(email: string): void {
  const record = failedAttempts.get(email.toLowerCase());
  if (record && record.count >= MAX_ATTEMPTS && Date.now() < record.lockedUntil) {
    const remaining = Math.ceil((record.lockedUntil - Date.now()) / 60000);
    throw new Error('Account temporarily locked. Too many failed attempts. Try again in ' + remaining + ' minute(s).');
  }
  if (record && Date.now() >= record.lockedUntil) {
    failedAttempts.delete(email.toLowerCase());
  }
}

function recordFailedAttempt(email: string): number {
  const key = email.toLowerCase();
  const record = failedAttempts.get(key) || { count: 0, lockedUntil: 0 };
  record.count += 1;
  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = Date.now() + LOCKOUT_DURATION;
  }
  failedAttempts.set(key, record);
  return MAX_ATTEMPTS - record.count;
}

function clearFailedAttempts(email: string): void {
  failedAttempts.delete(email.toLowerCase());
}

export function getRemainingAttempts(email: string): number {
  const record = failedAttempts.get(email.toLowerCase());
  if (!record) return MAX_ATTEMPTS;
  if (Date.now() >= record.lockedUntil) return MAX_ATTEMPTS;
  return Math.max(0, MAX_ATTEMPTS - record.count);
}

// --- Admin/Reviewer email lists ---
const ADMIN_EMAILS = [
  'kc.santosh@usd.edu',
  'rodrigue.rizk@usd.edu',
  'deepika.nuthalapati@usd.edu',
  'deepika.nuthalapati@coyotes.usd.edu',
  'srikanth.baride@usd.edu',
  'longwei.wang@usd.edu',
];
const REVIEWER_EMAILS = [
  ...ADMIN_EMAILS,
  'nand.yadav@usd.edu',
];

// --- Data Loading (fetches JSON files from repo) ---

let usersCache: BlogUser[] | null = null;
let postsCache: BlogPost[] | null = null;
let usersCacheTime = 0;
let postsCacheTime = 0;
const CACHE_TTL = 30000;

async function loadJSON<T>(path: string): Promise<T> {
  const cacheBuster = '?t=' + Date.now();
  const res = await fetch(path + cacheBuster);
  if (!res.ok) throw new Error('Failed to load ' + path + ': ' + res.status);
  return res.json();
}

async function getUsers(): Promise<BlogUser[]> {
  const now = Date.now();
  if (usersCache && now - usersCacheTime < CACHE_TTL) return usersCache;
  usersCache = await loadJSON<BlogUser[]>('/data/blog/users.json');
  usersCacheTime = now;
  return usersCache;
}

async function getPosts(): Promise<BlogPost[]> {
  const now = Date.now();
  if (postsCache && now - postsCacheTime < CACHE_TTL) return postsCache;
  postsCache = await loadJSON<BlogPost[]>('/data/blog/posts.json');
  postsCacheTime = now;
  return postsCache;
}

function invalidateCache() {
  usersCache = null;
  postsCache = null;
  usersCacheTime = 0;
  postsCacheTime = 0;
}

// --- GitHub API helpers (for writing blog posts to repo) ---

const REPO_OWNER = 'USD-AI-ResearchLab';
const REPO_NAME = 'usd-ai-researchlab.github.io';
const BRANCH = 'main';

function getGitHubToken(): string | null {
  return localStorage.getItem('usd_blog_github_token');
}

export function setGitHubToken(token: string) {
  localStorage.setItem('usd_blog_github_token', token);
}

export function hasGitHubToken(): boolean {
  return !!getGitHubToken();
}

async function readFileFromGitHub(path: string): Promise<{ content: string; sha: string }> {
  const token = getGitHubToken();
  if (!token) throw new Error('GitHub token not configured. An admin must set it up first.');
  const res = await fetch(
    'https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + path + '?ref=' + BRANCH,
    { headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github.v3+json' } }
  );
  if (!res.ok) throw new Error('GitHub API error: ' + res.status);
  const data = await res.json();
  const content = atob(data.content.replace(/\n/g, ''));
  return { content, sha: data.sha };
}

async function writeFileToGitHub(path: string, content: string, message: string): Promise<void> {
  const token = getGitHubToken();
  if (!token) throw new Error('GitHub token not configured. An admin must set it up first.');
  let sha: string | undefined;
  try {
    const existing = await readFileFromGitHub(path);
    sha = existing.sha;
  } catch {
    // File does not exist yet
  }
  const body: Record<string, unknown> = {
    message,
    content: btoa(unescape(encodeURIComponent(content))),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await fetch(
    'https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + path,
    {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error('GitHub write failed: ' + (err.message || res.status));
  }
}

// --- Helpers ---

function generateId(): string {
  return Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 9);
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ============================================================
// AUDIT LOG (stored in localStorage)
// ============================================================

const AUDIT_LOG_KEY = 'usd_blog_audit_log';

export interface AuditLogEntry {
  timestamp: string;
  email: string;
  name: string;
  action: 'login_success' | 'login_failed' | 'register' | 'password_reset' | 'lockout';
  details: string;
}

function getAuditLog(): AuditLogEntry[] {
  try {
    const raw = localStorage.getItem(AUDIT_LOG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAuditLog(entries: AuditLogEntry[]): void {
  const trimmed = entries.slice(-500);
  localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(trimmed));
}

function logAudit(email: string, name: string, action: AuditLogEntry['action'], details: string): void {
  const entries = getAuditLog();
  entries.push({ timestamp: new Date().toISOString(), email, name, action, details });
  saveAuditLog(entries);
}

export function getAccessLog(): AuditLogEntry[] {
  return getAuditLog().sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function clearAccessLog(): void {
  localStorage.removeItem(AUDIT_LOG_KEY);
}

export function exportAccessLogCSV(): string {
  const entries = getAccessLog();
  const header = 'Timestamp,Email,Name,Action,Details';
  const rows = entries.map(function(e) {
    return '"' + new Date(e.timestamp).toLocaleString() + '","' + e.email + '","' + e.name + '","' + e.action + '","' + e.details.replace(/"/g, '""') + '"';
  });
  return [header].concat(rows).join('\n');
}

// ============================================================
// LOCAL AUTH STORAGE (passwords in browser localStorage)
// ============================================================
// users.json = read-only roster of authorized members
// Passwords/hints stored locally per browser. No GitHub token needed.

const AUTH_STORAGE_KEY = 'usd_blog_auth_data';

interface LocalAuthData {
  [email: string]: {
    password: string;
    hint: string | null;
    lastLogin: string | null;
    loginCount: number;
  };
}

function getLocalAuthData(): LocalAuthData {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocalAuthData(data: LocalAuthData): void {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
}

// ============================================================
// PUBLIC API - Authentication (NO GitHub token needed)
// ============================================================

export async function checkUser(email: string): Promise<{ exists: boolean; needsRegistration: boolean; name: string }> {
  const users = await getUsers();
  const normalizedEmail = email.toLowerCase().trim();
  const user = users.find(function(u) { return u.email.toLowerCase() === normalizedEmail; });
  if (!user) return { exists: false, needsRegistration: false, name: '' };
  const authData = getLocalAuthData();
  const hasLocalPassword = !!(authData[normalizedEmail] && authData[normalizedEmail].password);
  return { exists: true, needsRegistration: !hasLocalPassword, name: user.name };
}

export async function registerUser(
  email: string,
  password: string,
  passwordHint: string
): Promise<AuthResult> {
  const users = await getUsers();
  const normalizedEmail = email.toLowerCase().trim();
  const user = users.find(function(u) { return u.email.toLowerCase() === normalizedEmail; });
  if (!user) {
    throw new Error('Your email is not in the authorized list. Contact an admin to be added.');
  }
  const authData = getLocalAuthData();
  if (authData[normalizedEmail] && authData[normalizedEmail].password) {
    throw new Error('You already have a password set. Please use Sign In instead.');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }
  authData[normalizedEmail] = {
    password: password,
    hint: passwordHint.trim() || null,
    lastLogin: new Date().toISOString(),
    loginCount: 1,
  };
  saveLocalAuthData(authData);
  logAudit(user.email, user.name, 'register', 'Account password created');
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isReviewer: REVIEWER_EMAILS.includes(user.email.toLowerCase()),
    isAdmin: ADMIN_EMAILS.includes(user.email.toLowerCase()),
  };
}

export async function loginUser(email: string, password: string): Promise<AuthResult> {
  const normalizedEmail = email.toLowerCase().trim();
  checkLockout(normalizedEmail);
  const users = await getUsers();
  const user = users.find(function(u) { return u.email.toLowerCase() === normalizedEmail; });
  if (!user) {
    throw new Error('No account found for this email. Contact an admin to be added.');
  }
  const authData = getLocalAuthData();
  const localAuth = authData[normalizedEmail];
  if (!localAuth || !localAuth.password) {
    // No password stored locally yet - first login on this browser.
    // Save the password and log them in directly.
    authData[normalizedEmail] = {
      password: password,
      hint: null,
      lastLogin: new Date().toISOString(),
      loginCount: 1,
    };
    saveLocalAuthData(authData);
    logAudit(user.email, user.name, 'register', 'First login - password saved to this browser');
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isReviewer: REVIEWER_EMAILS.includes(user.email.toLowerCase()),
      isAdmin: ADMIN_EMAILS.includes(user.email.toLowerCase()),
    };
  }
  if (localAuth.password !== password) {
    const remaining = recordFailedAttempt(normalizedEmail);
    if (remaining <= 0) {
      logAudit(user.email, user.name, 'lockout', 'Account locked after too many failed attempts');
      throw new Error('Account temporarily locked. Too many failed attempts. Try again in 5 minutes.');
    }
    logAudit(user.email, user.name, 'login_failed', 'Wrong password. ' + remaining + ' attempt(s) remaining');
    throw new Error('Incorrect password. ' + remaining + ' attempt(s) remaining. Click "Forgot Password?" for help.');
  }
  clearFailedAttempts(normalizedEmail);
  authData[normalizedEmail] = {
    password: localAuth.password,
    hint: localAuth.hint,
    lastLogin: new Date().toISOString(),
    loginCount: (localAuth.loginCount || 0) + 1,
  };
  saveLocalAuthData(authData);
  logAudit(user.email, user.name, 'login_success', 'Login #' + ((localAuth.loginCount || 0) + 1));
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isReviewer: REVIEWER_EMAILS.includes(user.email.toLowerCase()),
    isAdmin: ADMIN_EMAILS.includes(user.email.toLowerCase()),
  };
}

export async function getPasswordHint(email: string): Promise<PasswordHintResult> {
  const users = await getUsers();
  const normalizedEmail = email.toLowerCase().trim();
  const user = users.find(function(u) { return u.email.toLowerCase() === normalizedEmail; });
  if (!user) {
    throw new Error('No account found for this email.');
  }
  const authData = getLocalAuthData();
  const localAuth = authData[normalizedEmail];
  if (!localAuth || !localAuth.password) {
    throw new Error('You have not set a password yet. Click "Sign Up" to register.');
  }
  return new PasswordHintResult(localAuth.hint, user.email);
}

export async function resetPassword(
  email: string,
  newPassword: string,
  newHint: string
): Promise<void> {
  const users = await getUsers();
  const normalizedEmail = email.toLowerCase().trim();
  const user = users.find(function(u) { return u.email.toLowerCase() === normalizedEmail; });
  if (!user) throw new Error('No account found for this email.');
  if (newPassword.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }
  const authData = getLocalAuthData();
  const existing = authData[normalizedEmail] || { lastLogin: null, loginCount: 0 };
  authData[normalizedEmail] = {
    password: newPassword,
    hint: newHint.trim() || null,
    lastLogin: existing.lastLogin,
    loginCount: existing.loginCount,
  };
  saveLocalAuthData(authData);
  logAudit(user.email, user.name, 'password_reset', 'Password was reset');
}

// ============================================================
// PUBLIC API - Blog Posts (Read - no token needed)
// ============================================================

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts
    .filter(function(p) { return p.status === 'published'; })
    .sort(function(a, b) { return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime(); });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getPosts();
  return posts.find(function(p) { return p.slug === slug && p.status === 'published'; }) || null;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await getPosts();
  return posts.find(function(p) { return p.id === id; }) || null;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts.sort(function(a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
}

export async function getPostsByAuthor(email: string): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts
    .filter(function(p) { return p.author_email.toLowerCase() === email.toLowerCase(); })
    .sort(function(a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
}

// ============================================================
// PUBLIC API - Blog Posts (Write - requires GitHub token)
// All authorized users can: create, update own, submit for review
// Only admin/reviewer can: publish, unpublish, delete others
// ============================================================

export async function createPost(data: {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  authorId: number;
  authorName: string;
  authorEmail: string;
}): Promise<{ id: string; slug: string }> {
  if (!hasGitHubToken()) throw new Error('Write access not configured. Admin must set up GitHub token.');
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const id = generateId();
  const slug = slugify(data.title);
  const now = new Date().toISOString();
  const newPost: BlogPost = {
    id,
    title: data.title.trim(),
    slug,
    excerpt: data.excerpt.trim() || data.content.slice(0, 160).replace(/[#*_\n]/g, '').trim(),
    content: data.content,
    tags: data.tags,
    status: 'draft',
    author_id: data.authorId,
    author_name: data.authorName,
    author_email: data.authorEmail,
    created_at: now,
    updated_at: now,
    published_at: null,
  };
  posts.push(newPost);
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] New post: "' + data.title + '" by ' + data.authorName
  );
  invalidateCache();
  return { id, slug };
}

export async function updatePost(
  postId: string,
  data: { title?: string; excerpt?: string; content?: string; tags?: string[] },
  userEmail: string
): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const idx = posts.findIndex(function(p) { return p.id === postId; });
  if (idx === -1) throw new Error('Post not found');
  const post = posts[idx];
  const isReviewerUser = REVIEWER_EMAILS.includes(userEmail.toLowerCase());
  if (!isReviewerUser && post.author_email.toLowerCase() !== userEmail.toLowerCase()) {
    throw new Error('You can only edit your own posts');
  }
  if (data.title !== undefined) {
    post.title = data.title.trim();
    post.slug = slugify(data.title);
  }
  if (data.excerpt !== undefined) post.excerpt = data.excerpt.trim();
  if (data.content !== undefined) post.content = data.content;
  if (data.tags !== undefined) post.tags = data.tags;
  post.updated_at = new Date().toISOString();
  posts[idx] = post;
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] Updated: "' + post.title + '" by ' + userEmail
  );
  invalidateCache();
}

export async function submitForReview(postId: string, userEmail: string): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const idx = posts.findIndex(function(p) { return p.id === postId; });
  if (idx === -1) throw new Error('Post not found');
  const post = posts[idx];
  if (post.author_email.toLowerCase() !== userEmail.toLowerCase()) {
    throw new Error('You can only submit your own posts');
  }
  post.status = 'pending';
  post.updated_at = new Date().toISOString();
  posts[idx] = post;
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] Submitted for review: "' + post.title + '"'
  );
  invalidateCache();
}

// --- Admin/Reviewer only: publish, unpublish, delete ---

export async function publishPost(postId: string, userEmail: string): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  if (!REVIEWER_EMAILS.includes(userEmail.toLowerCase())) {
    throw new Error('Only reviewers and admins can publish posts.');
  }
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const idx = posts.findIndex(function(p) { return p.id === postId; });
  if (idx === -1) throw new Error('Post not found');
  posts[idx].status = 'published';
  posts[idx].published_at = new Date().toISOString();
  posts[idx].updated_at = new Date().toISOString();
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] Published: "' + posts[idx].title + '"'
  );
  invalidateCache();
}

export async function unpublishPost(postId: string, userEmail: string): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  if (!REVIEWER_EMAILS.includes(userEmail.toLowerCase())) {
    throw new Error('Only reviewers and admins can unpublish posts.');
  }
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const idx = posts.findIndex(function(p) { return p.id === postId; });
  if (idx === -1) throw new Error('Post not found');
  posts[idx].status = 'draft';
  posts[idx].published_at = null;
  posts[idx].updated_at = new Date().toISOString();
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] Unpublished: "' + posts[idx].title + '"'
  );
  invalidateCache();
}

export async function deletePost(postId: string, userEmail: string): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  const { content: raw } = await readFileFromGitHub('data/blog/posts.json');
  const posts: BlogPost[] = JSON.parse(raw);
  const idx = posts.findIndex(function(p) { return p.id === postId; });
  if (idx === -1) throw new Error('Post not found');
  const post = posts[idx];
  const isAdminUser = ADMIN_EMAILS.includes(userEmail.toLowerCase());
  const isReviewerUser = REVIEWER_EMAILS.includes(userEmail.toLowerCase());
  if (!isAdminUser && !isReviewerUser) {
    throw new Error('Only admins and reviewers can delete posts.');
  }
  posts.splice(idx, 1);
  await writeFileToGitHub(
    'data/blog/posts.json',
    JSON.stringify(posts, null, 2),
    '[blog] Deleted: "' + post.title + '" by ' + userEmail
  );
  invalidateCache();
}

// ============================================================
// ADMIN: User Management
// ============================================================

export async function addUser(data: {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'reviewer' | 'author';
}): Promise<void> {
  if (!hasGitHubToken()) throw new Error('Write access not configured.');
  const { content: raw } = await readFileFromGitHub('data/blog/users.json');
  const users: BlogUser[] = JSON.parse(raw);
  if (users.find(function(u) { return u.email.toLowerCase() === data.email.toLowerCase(); })) {
    throw new Error('A user with this email already exists');
  }
  const maxId = users.reduce(function(max, u) { return u.id > max ? u.id : max; }, 0);
  const newUser: BlogUser = {
    id: maxId + 1,
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    password_hash: data.password,
    password_hint: null,
    role: data.role,
    created_at: new Date().toISOString(),
    last_login: null,
    login_count: 0,
  };
  users.push(newUser);
  await writeFileToGitHub(
    'data/blog/users.json',
    JSON.stringify(users, null, 2),
    '[blog] Added user: ' + data.name + ' (' + data.role + ')'
  );
  invalidateCache();
}

// ============================================================
// EXPORT: Generate CSV for Excel
// ============================================================

export async function exportUsersCSV(): Promise<string> {
  const users = await getUsers();
  const header = 'ID,Name,Email,Role,Created At,Last Login,Login Count';
  const rows = users.map(function(u) {
    return u.id + ',"' + u.name + '","' + u.email + '","' + u.role + '","' + u.created_at + '","' + (u.last_login || 'Never') + '",' + u.login_count;
  });
  return [header].concat(rows).join('\n');
}

export function downloadCSV(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
