// Free JSON-based blog service using localStorage + GitHub
// This stores blog posts locally and can sync with a JSON file in the repo

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  authorId: string;
  authorName: string;
  authorEmail: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Author {
  id: string;
  email: string;
  displayName: string;
  isReviewer: boolean;
}

const POSTS_KEY = 'usd_ai_blog_posts';
const AUTHORS_KEY = 'usd_ai_blog_authors';
const CURRENT_USER_KEY = 'usd_ai_current_user';

// Reviewer emails - can edit all posts
const REVIEWER_EMAILS = [
  'kc.santosh@usd.edu',
  'rodrigue.rizk@usd.edu',
  'deepika.nuthalapati@usd.edu',
  'srikanth.baride@usd.edu',
  'longwei.wang@usd.edu'
];

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Get all posts from localStorage
export const getAllPosts = (): BlogPost[] => {
  try {
    const posts = localStorage.getItem(POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  } catch {
    return [];
  }
};

// Save all posts to localStorage
const savePosts = (posts: BlogPost[]): void => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

// Get published posts only
export const getPublishedBlogPosts = (): BlogPost[] => {
  return getAllPosts()
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime());
};

// Get post by ID
export const getBlogPostById = (id: string): BlogPost | null => {
  return getAllPosts().find(post => post.id === id) || null;
};

// Get post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return getAllPosts().find(post => post.slug === slug) || null;
};

// Create new post
export const createBlogPost = (postData: Omit<BlogPost, 'id' | 'slug' | 'createdAt' | 'updatedAt'>): string => {
  const posts = getAllPosts();
  const newPost: BlogPost = {
    ...postData,
    id: generateId(),
    slug: generateSlug(postData.title),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  posts.push(newPost);
  savePosts(posts);
  return newPost.id;
};

// Update post
export const updateBlogPost = (id: string, updates: Partial<BlogPost>): void => {
  const posts = getAllPosts();
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = {
      ...posts[index],
      ...updates,
      updatedAt: new Date().toISOString(),
      slug: updates.title ? generateSlug(updates.title) : posts[index].slug
    };
    savePosts(posts);
  }
};

// Delete post
export const deleteBlogPost = (id: string): void => {
  const posts = getAllPosts().filter(post => post.id !== id);
  savePosts(posts);
};

// Publish post
export const publishBlogPost = (id: string): void => {
  updateBlogPost(id, {
    status: 'published',
    publishedAt: new Date().toISOString()
  });
};

// Unpublish post
export const unpublishBlogPost = (id: string): void => {
  updateBlogPost(id, {
    status: 'draft',
    publishedAt: undefined
  });
};

// Get posts by author
export const getPostsByAuthor = (authorId: string): BlogPost[] => {
  return getAllPosts().filter(post => post.authorId === authorId);
};

// Get all tags
export const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

// ============ AUTH FUNCTIONS ============

// Get all authors
const getAuthors = (): Author[] => {
  try {
    const authors = localStorage.getItem(AUTHORS_KEY);
    return authors ? JSON.parse(authors) : [];
  } catch {
    return [];
  }
};

// Save authors
const saveAuthors = (authors: Author[]): void => {
  localStorage.setItem(AUTHORS_KEY, JSON.stringify(authors));
};

// Check if email is valid USD email
const isValidUsdEmail = (email: string): boolean => {
  return email.toLowerCase().endsWith('@usd.edu');
};

// Check if user is reviewer
export const isReviewer = (email: string): boolean => {
  return REVIEWER_EMAILS.includes(email.toLowerCase());
};

// Register new author
export const registerAuthor = (email: string, password: string, displayName: string): Author => {
  if (!isValidUsdEmail(email)) {
    throw new Error('Only @usd.edu email addresses are allowed');
  }

  const authors = getAuthors();
  const existingAuthor = authors.find(a => a.email.toLowerCase() === email.toLowerCase());
  
  if (existingAuthor) {
    throw new Error('An account with this email already exists');
  }

  const newAuthor: Author = {
    id: generateId(),
    email: email.toLowerCase(),
    displayName,
    isReviewer: isReviewer(email)
  };

  // Store password hash (simple for demo - in production use proper hashing)
  localStorage.setItem(`pwd_${newAuthor.id}`, btoa(password));
  
  authors.push(newAuthor);
  saveAuthors(authors);
  
  return newAuthor;
};

// Login author
export const loginAuthor = (email: string, password: string): Author => {
  const authors = getAuthors();
  const author = authors.find(a => a.email.toLowerCase() === email.toLowerCase());
  
  if (!author) {
    throw new Error('No account found with this email');
  }

  const storedPassword = localStorage.getItem(`pwd_${author.id}`);
  if (!storedPassword || atob(storedPassword) !== password) {
    throw new Error('Incorrect password');
  }

  // Set current user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(author));
  
  return author;
};

// Logout
export const logoutAuthor = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Get current user
export const getCurrentUser = (): Author | null => {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

// Check if current user can edit a post
export const canEditPost = (post: BlogPost): boolean => {
  const user = getCurrentUser();
  if (!user) return false;
  return user.isReviewer || post.authorId === user.id;
};

// Export posts as JSON (for backup)
export const exportPosts = (): string => {
  return JSON.stringify(getAllPosts(), null, 2);
};

// Import posts from JSON
export const importPosts = (jsonData: string): void => {
  try {
    const posts = JSON.parse(jsonData);
    if (Array.isArray(posts)) {
      savePosts(posts);
    }
  } catch (error) {
    console.error('Failed to import posts:', error);
    throw new Error('Invalid JSON data');
  }
};
