// ============================================================
// Blog Database Service - Powered by Supabase
// ============================================================
// All data is stored in Supabase PostgreSQL database
//   - users table     -> user accounts (email, password, role)
//   - posts table     -> all blog posts
//   - audit_log table -> login/access audit trail
//
// No GitHub token needed. No localStorage for data.
// Supabase handles all persistence.
// ============================================================

import { supabase } from '../config/supabase';

// --- Types ---

export interface BlogUser {
  id: number;
  name: string;
  email: string;
  password: string | null;
  password_hint: string | null;
  role: 'admin' | 'reviewer' | 'author';
  failed_attempts: number;
  lockout_until: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: 'draft' | 'pending' | 'published';
  author: string;
  author_email: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  featured_image?: string | null;
}

export interface AuditLogEntry {
  id?: number;
  timestamp: string;
  user_email: string;
  user_name: string | null;
  action: 'login_success' | 'login_failed' | 'register' | 'password_reset' | 'lockout';
  details: string;
  ip_address?: string | null;
}

export interface AuthResult {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'reviewer' | 'author';
  isReviewer: boolean;
  isAdmin: boolean;
  isApprover: boolean;
}

// Thrown when user exists but hasn't set a password yet
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
    const [local, domain] = email.split('@');
    this.maskedEmail = local.charAt(0) + '***' + local.charAt(local.length - 1) + '@' + domain;
  }
}

// --- Failed Login Attempt Tracking (in-memory, resets on page reload) ---
const failedAttempts: Map<string, { count: number; lockedUntil: number }> = new Map();
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes

function checkLockout(email: string): void {
  const record = failedAttempts.get(email.toLowerCase());
  if (record && record.count >= MAX_ATTEMPTS && Date.now() < record.lockedUntil) {
    const remaining = Math.ceil((record.lockedUntil - Date.now()) / 60000);
    throw new Error(`Account temporarily locked. Too many failed attempts. Try again in ${remaining} minute(s).`);
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
// Only KC Santosh and Deepika Nuthalapati can approve (publish/unpublish) posts
const APPROVER_EMAILS = [
  'kc.santosh@usd.edu',
  'deepika.nuthalapati@usd.edu',
  'deepika.nuthalapati@coyotes.usd.edu',
];

// --- Helper: build AuthResult from user row ---
function toAuthResult(user: BlogUser): AuthResult {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isReviewer: REVIEWER_EMAILS.includes(user.email.toLowerCase()),
    isAdmin: ADMIN_EMAILS.includes(user.email.toLowerCase()),
    isApprover: APPROVER_EMAILS.includes(user.email.toLowerCase()),
  };
}

// --- Helper: log audit entry to Supabase ---
async function logAudit(
  email: string,
  name: string,
  action: AuditLogEntry['action'],
  details: string
): Promise<void> {
  try {
    await supabase.from('audit_log').insert({
      user_email: email,
      user_name: name,
      action,
      details,
    });
  } catch {
    // Silently fail — audit logging should never block the user
    console.warn('Audit log write failed');
  }
}

// --- Helper: generate unique ID ---
function generateId(): string {
  return Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 9);
}

// --- Helper: slugify a title ---
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ============================================================
// PUBLIC API - Authentication
// ============================================================

export async function checkUser(email: string): Promise<{ exists: boolean; needsRegistration: boolean; name: string }> {
  const normalizedEmail = email.toLowerCase().trim();
  const { data: user } = await supabase
    .from('users')
    .select('name, password')
    .eq('email', normalizedEmail)
    .single();

  if (!user) return { exists: false, needsRegistration: false, name: '' };

  return {
    exists: true,
    needsRegistration: !user.password,
    name: user.name,
  };
}

export async function registerUser(
  email: string,
  password: string,
  passwordHint: string
): Promise<AuthResult> {
  const normalizedEmail = email.toLowerCase().trim();

  const { data: user, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('email', normalizedEmail)
    .single();

  if (fetchError || !user) {
    throw new Error('Your email is not in the authorized list. Contact an admin to be added.');
  }

  if (user.password) {
    throw new Error('You already have a password set. Please use Sign In instead.');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const { error: updateError } = await supabase
    .from('users')
    .update({
      password: password,
      password_hint: passwordHint.trim() || null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id);

  if (updateError) throw new Error('Failed to save password. Please try again.');

  await logAudit(user.email, user.name, 'register', 'Account password created successfully');
  return toAuthResult(user as BlogUser);
}

export async function loginUser(email: string, password: string): Promise<AuthResult> {
  const normalizedEmail = email.toLowerCase().trim();

  checkLockout(normalizedEmail);

  const { data: user, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('email', normalizedEmail)
    .single();

  if (fetchError || !user) {
    throw new Error('No account found for this email. Contact an admin to be added.');
  }

  // If user has no password yet, save the one they entered (first-time login)
  if (!user.password) {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    await supabase
      .from('users')
      .update({
        password: password,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    await logAudit(user.email, user.name, 'register', 'First login — password saved');
    return toAuthResult(user as BlogUser);
  }

  // Verify password
  if (user.password !== password) {
    const remaining = recordFailedAttempt(normalizedEmail);
    if (remaining <= 0) {
      await logAudit(user.email, user.name, 'lockout', 'Account locked after too many failed attempts');
      throw new Error('Account temporarily locked. Too many failed attempts. Try again in 5 minutes.');
    }
    await logAudit(user.email, user.name, 'login_failed', `Wrong password. ${remaining} attempt(s) remaining`);
    throw new Error(`Incorrect password. ${remaining} attempt(s) remaining. Click "Forgot Password?" for help.`);
  }

  clearFailedAttempts(normalizedEmail);
  await logAudit(user.email, user.name, 'login_success', 'Logged in successfully');
  return toAuthResult(user as BlogUser);
}

export async function getPasswordHint(email: string): Promise<PasswordHintResult> {
  const normalizedEmail = email.toLowerCase().trim();

  const { data: user } = await supabase
    .from('users')
    .select('email, password, password_hint')
    .eq('email', normalizedEmail)
    .single();

  if (!user) throw new Error('No account found for this email.');
  if (!user.password) throw new Error('You have not set a password yet. Click "Sign Up" to register.');

  return new PasswordHintResult(user.password_hint, user.email);
}

export async function resetPassword(
  email: string,
  newPassword: string,
  newHint: string
): Promise<void> {
  const normalizedEmail = email.toLowerCase().trim();

  if (newPassword.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const { data: user } = await supabase
    .from('users')
    .select('id, email, name')
    .eq('email', normalizedEmail)
    .single();

  if (!user) throw new Error('No account found for this email.');

  const { error } = await supabase
    .from('users')
    .update({
      password: newPassword,
      password_hint: newHint.trim() || null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id);

  if (error) throw new Error('Failed to reset password. Please try again.');

  await logAudit(user.email, user.name, 'password_reset', 'Password was reset');
}

// ============================================================
// PUBLIC API - Blog Posts (Read)
// ============================================================

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error) throw new Error('Failed to load posts');
  return (data || []) as BlogPost[];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  return (data as BlogPost) || null;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  return (data as BlogPost) || null;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to load posts');
  return (data || []) as BlogPost[];
}

export async function getPostsByAuthor(email: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('author_email', email.toLowerCase())
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to load posts');
  return (data || []) as BlogPost[];
}

// ============================================================
// PUBLIC API - Blog Posts (Write) — NO GitHub token needed!
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
  const id = generateId();
  const slug = slugify(data.title);
  const now = new Date().toISOString();

  const newPost = {
    id,
    title: data.title.trim(),
    slug,
    excerpt: data.excerpt.trim() || data.content.slice(0, 160).replace(/[#*_\n]/g, '').trim(),
    content: data.content,
    tags: data.tags,
    status: 'draft',
    author: data.authorName,
    author_email: data.authorEmail.toLowerCase(),
    created_at: now,
    updated_at: now,
    published_at: null,
  };

  const { error } = await supabase.from('posts').insert(newPost);
  if (error) throw new Error(`Failed to create post: ${error.message}`);

  return { id, slug };
}

export async function updatePost(
  postId: string,
  data: { title?: string; excerpt?: string; content?: string; tags?: string[] },
  userEmail: string
): Promise<void> {
  // Fetch existing post
  const { data: post, error: fetchError } = await supabase
    .from('posts')
    .select('*')
    .eq('id', postId)
    .single();

  if (fetchError || !post) throw new Error('Post not found');

  const isReviewerUser = REVIEWER_EMAILS.includes(userEmail.toLowerCase());
  if (!isReviewerUser && post.author_email?.toLowerCase() !== userEmail.toLowerCase()) {
    throw new Error('You can only edit your own posts');
  }

  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (data.title !== undefined) {
    updates.title = data.title.trim();
    updates.slug = slugify(data.title);
  }
  if (data.excerpt !== undefined) updates.excerpt = data.excerpt.trim();
  if (data.content !== undefined) updates.content = data.content;
  if (data.tags !== undefined) updates.tags = data.tags;

  const { error } = await supabase.from('posts').update(updates).eq('id', postId);
  if (error) throw new Error(`Failed to update post: ${error.message}`);
}

export async function submitForReview(postId: string, userEmail: string): Promise<void> {
  const { data: post, error: fetchError } = await supabase
    .from('posts')
    .select('author_email')
    .eq('id', postId)
    .single();

  if (fetchError || !post) throw new Error('Post not found');

  const isReviewerUser = REVIEWER_EMAILS.includes(userEmail.toLowerCase());
  if (!isReviewerUser && post.author_email?.toLowerCase() !== userEmail.toLowerCase()) {
    throw new Error('You can only submit your own posts');
  }

  const { error } = await supabase
    .from('posts')
    .update({ status: 'pending', updated_at: new Date().toISOString() })
    .eq('id', postId);

  if (error) throw new Error('Failed to submit for review');
}

export async function publishPost(postId: string, userEmail: string): Promise<void> {
  if (!APPROVER_EMAILS.includes(userEmail.toLowerCase())) {
    throw new Error('Only KC Santosh or Deepika Nuthalapati can approve and publish posts');
  }

  const now = new Date().toISOString();
  const { error } = await supabase
    .from('posts')
    .update({ status: 'published', published_at: now, updated_at: now })
    .eq('id', postId);

  if (error) throw new Error('Failed to publish post');
}

export async function unpublishPost(postId: string, userEmail: string): Promise<void> {
  if (!APPROVER_EMAILS.includes(userEmail.toLowerCase())) {
    throw new Error('Only KC Santosh or Deepika Nuthalapati can unpublish posts');
  }

  const { error } = await supabase
    .from('posts')
    .update({ status: 'draft', published_at: null, updated_at: new Date().toISOString() })
    .eq('id', postId);

  if (error) throw new Error('Failed to unpublish post');
}

export async function deletePost(postId: string, userEmail: string): Promise<void> {
  const { data: post, error: fetchError } = await supabase
    .from('posts')
    .select('author_email')
    .eq('id', postId)
    .single();

  if (fetchError || !post) throw new Error('Post not found');

  const isAdminUser = ADMIN_EMAILS.includes(userEmail.toLowerCase());
  if (!isAdminUser && post.author_email?.toLowerCase() !== userEmail.toLowerCase()) {
    throw new Error('You can only delete your own posts');
  }

  const { error } = await supabase.from('posts').delete().eq('id', postId);
  if (error) throw new Error('Failed to delete post');
}

// ============================================================
// AUDIT LOG
// ============================================================

export async function getAccessLog(): Promise<AuditLogEntry[]> {
  const { data, error } = await supabase
    .from('audit_log')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(500);

  if (error) return [];
  return (data || []) as AuditLogEntry[];
}

export async function clearAccessLog(): Promise<void> {
  // Delete all entries (Supabase requires a filter, use gte on id to match all)
  await supabase.from('audit_log').delete().gte('id', 0);
}

export function exportAccessLogCSV(entries: AuditLogEntry[]): string {
  const header = 'Timestamp,Email,Name,Action,Details';
  const rows = entries.map(e =>
    `"${new Date(e.timestamp).toLocaleString()}","${e.user_email}","${e.user_name || ''}","${e.action}","${(e.details || '').replace(/"/g, '""')}"`
  );
  return [header, ...rows].join('\n');
}

// ============================================================
// EXPORT: CSV helper
// ============================================================

export function downloadCSV(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// LEGACY COMPATIBILITY - these are no-ops now
// ============================================================

export function setGitHubToken(_token: string): void {
  // No-op: Supabase handles all writes, no GitHub token needed
}

export function hasGitHubToken(): boolean {
  // Always true: Supabase handles writes, no token needed
  return true;
}
