// GitHub-based Blog Service
// Reads blog posts from markdown files in content/blog/

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorName: string;  // Alias for author (for compatibility)
  email: string;
  date: string;
  createdAt: string;   // Alias for date
  publishedAt: string; // Alias for date
  tags: string[];
  excerpt: string;
  image?: string;
  content: string;
  status: 'published';
}

// Import all markdown files from content/blog
const blogModules = import.meta.glob('/content/blog/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

// Parse frontmatter from markdown
const parseFrontmatter = (content: string): { frontmatter: Record<string, unknown>; body: string } => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterStr = match[1];
  const body = match[2];
  
  // Parse YAML-like frontmatter
  const frontmatter: Record<string, unknown> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          frontmatter[key] = JSON.parse(value.replace(/'/g, '"'));
        } catch {
          frontmatter[key] = value;
        }
      } else {
        frontmatter[key] = value;
      }
    }
  }
  
  return { frontmatter, body };
};

// Generate slug from filename
const generateSlug = (filename: string): string => {
  // Remove path and extension: /content/blog/2026-03-10-my-post.md -> my-post
  const name = filename.split('/').pop()?.replace('.md', '') || '';
  // Remove date prefix if present: 2026-03-10-my-post -> my-post
  return name.replace(/^\d{4}-\d{2}-\d{2}-/, '');
};

// Generate ID from filename
const generateId = (filename: string): string => {
  const name = filename.split('/').pop()?.replace('.md', '') || '';
  return name;
};

// Get all published blog posts
export const getPublishedBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  
  for (const [path, content] of Object.entries(blogModules)) {
    // Skip README
    if (path.includes('README')) continue;
    
    const { frontmatter, body } = parseFrontmatter(content as string);
    
    const dateStr = (frontmatter.date as string) || new Date().toISOString().split('T')[0];
    const authorStr = (frontmatter.author as string) || 'Anonymous';
    
    const post: BlogPost = {
      id: generateId(path),
      slug: generateSlug(path),
      title: (frontmatter.title as string) || 'Untitled',
      author: authorStr,
      authorName: authorStr,  // Alias
      email: (frontmatter.email as string) || '',
      date: dateStr,
      createdAt: dateStr,     // Alias
      publishedAt: dateStr,   // Alias
      tags: (frontmatter.tags as string[]) || [],
      excerpt: (frontmatter.excerpt as string) || body.substring(0, 150) + '...',
      image: frontmatter.image as string | undefined,
      content: body,
      status: 'published'
    };
    
    posts.push(post);
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get all posts (same as published for GitHub-based system)
export const getAllPosts = (): BlogPost[] => {
  return getPublishedBlogPosts();
};

// Get post by ID
export const getBlogPostById = (id: string): BlogPost | null => {
  return getPublishedBlogPosts().find(post => post.id === id) || null;
};

// Get post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return getPublishedBlogPosts().find(post => post.slug === slug) || null;
};

// Get all unique tags
export const getAllTags = (): string[] => {
  const posts = getPublishedBlogPosts();
  const tags = new Set<string>();
  posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

// Get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return getPublishedBlogPosts().filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

// Get posts by author
export const getPostsByAuthor = (authorEmail: string): BlogPost[] => {
  return getPublishedBlogPosts().filter(post => 
    post.email.toLowerCase() === authorEmail.toLowerCase()
  );
};
