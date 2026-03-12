// ============================================================
// Publications Database Service — Supabase-powered
// ============================================================
// Manages research papers, books, and publications for the lab.
// Admin/reviewer users can add, edit, delete publications.
// All data persisted in Supabase `publications` table.
// Falls back to static data if Supabase is unavailable.
// ============================================================

import { supabase } from '../config/supabase';
import { PUBLICATIONS as STATIC_PUBLICATIONS } from '../data/publications';
import { PUBLICATIONS_BY_YEAR, FEW_SAMPLES, type SamplePublication } from '../data/publicationsByYear';

// --- Types ---

export type PublicationType = 'journal' | 'conference' | 'book_chapter' | 'book' | 'preprint' | 'other';

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  venue: string;
  year: string;
  type: PublicationType;
  doi_url: string | null;
  paper_url: string | null;
  code_url: string | null;
  tags: string[];
  is_featured: boolean;
  status: 'draft' | 'published';
  added_by: string; // email of the user who added it
  created_at: string;
  updated_at: string;
}

// Admin email list (same as blog)
const ADMIN_EMAILS = [
  'kc.santosh@usd.edu',
  'rodrigue.rizk@usd.edu',
  'deepika.nuthalapati@usd.edu',
  'srikanth.baride@usd.edu',
  'longwei.wang@usd.edu',
];

const REVIEWER_EMAILS = [
  ...ADMIN_EMAILS,
  'nand.yadav@usd.edu',
];

export function isPublicationsAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function isPublicationsReviewer(email: string): boolean {
  return REVIEWER_EMAILS.includes(email.toLowerCase());
}

// --- Supabase CRUD ---

/** Get all published papers from Supabase (public-facing) */
export async function getPublishedPapers(): Promise<ResearchPaper[]> {
  try {
    const { data, error } = await supabase
      .from('publications')
      .select('*')
      .eq('status', 'published')
      .order('year', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []) as ResearchPaper[];
  } catch {
    // Fallback: return empty — static data still displays from existing components
    console.warn('Supabase publications unavailable, using static data only');
    return [];
  }
}

/** Get ALL papers (admin view — includes drafts) */
export async function getAllPapers(): Promise<ResearchPaper[]> {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []) as ResearchPaper[];
}

/** Get a single paper by ID */
export async function getPaperById(id: string): Promise<ResearchPaper | null> {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as ResearchPaper;
}

/** Create a new paper */
export async function createPaper(
  paper: Omit<ResearchPaper, 'id' | 'created_at' | 'updated_at'>,
  userEmail: string
): Promise<ResearchPaper> {
  if (!isPublicationsReviewer(userEmail)) {
    throw new Error('Only admins and reviewers can add publications');
  }

  const { data, error } = await supabase
    .from('publications')
    .insert({
      title: paper.title,
      authors: paper.authors,
      abstract: paper.abstract,
      venue: paper.venue,
      year: paper.year,
      type: paper.type,
      doi_url: paper.doi_url || null,
      paper_url: paper.paper_url || null,
      code_url: paper.code_url || null,
      tags: paper.tags || [],
      is_featured: paper.is_featured || false,
      status: paper.status || 'draft',
      added_by: userEmail,
    })
    .select()
    .single();

  if (error) throw error;
  return data as ResearchPaper;
}

/** Update an existing paper */
export async function updatePaper(
  id: string,
  updates: Partial<ResearchPaper>,
  userEmail: string
): Promise<ResearchPaper> {
  if (!isPublicationsReviewer(userEmail)) {
    throw new Error('Only admins and reviewers can edit publications');
  }

  const { data, error } = await supabase
    .from('publications')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as ResearchPaper;
}

/** Publish a paper (make it visible) */
export async function publishPaper(id: string, userEmail: string): Promise<void> {
  if (!isPublicationsReviewer(userEmail)) {
    throw new Error('Only admins and reviewers can publish papers');
  }
  const { error } = await supabase
    .from('publications')
    .update({ status: 'published', updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

/** Unpublish a paper */
export async function unpublishPaper(id: string, userEmail: string): Promise<void> {
  if (!isPublicationsReviewer(userEmail)) {
    throw new Error('Only admins and reviewers can unpublish papers');
  }
  const { error } = await supabase
    .from('publications')
    .update({ status: 'draft', updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

/** Delete a paper */
export async function deletePaper(id: string, userEmail: string): Promise<void> {
  if (!isPublicationsAdmin(userEmail)) {
    throw new Error('Only admins can delete publications');
  }
  const { error } = await supabase
    .from('publications')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

/** Toggle featured status */
export async function toggleFeatured(id: string, userEmail: string): Promise<void> {
  if (!isPublicationsReviewer(userEmail)) {
    throw new Error('Only admins and reviewers can feature papers');
  }
  const paper = await getPaperById(id);
  if (!paper) throw new Error('Paper not found');

  const { error } = await supabase
    .from('publications')
    .update({ is_featured: !paper.is_featured, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

// --- Seed helper: import static data into Supabase ---

export async function seedFromStaticData(userEmail: string): Promise<number> {
  if (!isPublicationsAdmin(userEmail)) {
    throw new Error('Only admins can seed publications data');
  }

  let count = 0;

  // Import from PUBLICATIONS (card-format data)
  for (const pub of STATIC_PUBLICATIONS) {
    try {
      await supabase.from('publications').insert({
        title: pub.title,
        authors: pub.authors || 'KC Santosh et al.',
        abstract: pub.description,
        venue: pub.venue || '',
        year: pub.year || '2024',
        type: 'journal' as PublicationType,
        doi_url: pub.paperUrl || null,
        paper_url: pub.paperUrl || null,
        code_url: pub.codeUrl && pub.codeUrl !== '#' ? pub.codeUrl : null,
        tags: [],
        is_featured: false,
        status: 'published',
        added_by: userEmail,
      });
      count++;
    } catch {
      // skip duplicates
    }
  }

  return count;
}

// --- Helpers for the public page ---

/** Merge Supabase papers with static data for the public page */
export async function getMergedPublications(): Promise<{
  supabasePapers: ResearchPaper[];
  staticPublications: typeof STATIC_PUBLICATIONS;
  publicationsByYear: typeof PUBLICATIONS_BY_YEAR;
  fewSamples: SamplePublication[];
}> {
  const supabasePapers = await getPublishedPapers();
  return {
    supabasePapers,
    staticPublications: STATIC_PUBLICATIONS,
    publicationsByYear: PUBLICATIONS_BY_YEAR,
    fewSamples: FEW_SAMPLES,
  };
}

// --- Statistics ---

export async function getPublicationStats(): Promise<{
  total: number;
  published: number;
  drafts: number;
  journals: number;
  conferences: number;
  books: number;
  featured: number;
}> {
  const { data, error } = await supabase
    .from('publications')
    .select('status, type, is_featured');

  if (error) throw error;
  const papers = data || [];

  return {
    total: papers.length,
    published: papers.filter(p => p.status === 'published').length,
    drafts: papers.filter(p => p.status === 'draft').length,
    journals: papers.filter(p => p.type === 'journal').length,
    conferences: papers.filter(p => p.type === 'conference').length,
    books: papers.filter(p => p.type === 'book' || p.type === 'book_chapter').length,
    featured: papers.filter(p => p.is_featured).length,
  };
}
