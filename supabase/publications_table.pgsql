-- ============================================================
-- Supabase SQL (PostgreSQL): publications table for USD AI Research Lab
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- NOTE: This is PostgreSQL syntax, NOT Oracle SQL.
--       If your editor shows Oracle SQL lint errors (e.g. TEXT[]),
--       they are false positives — ignore them.
-- ============================================================

-- 1. Create the publications table
CREATE TABLE IF NOT EXISTS public.publications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT NOT NULL DEFAULT '',
  abstract TEXT DEFAULT '',
  venue TEXT DEFAULT '',
  year TEXT DEFAULT '',
  type TEXT DEFAULT 'journal' CHECK (type IN ('journal', 'conference', 'book_chapter', 'book', 'preprint', 'other')),
  doi_url TEXT,
  paper_url TEXT,
  code_url TEXT,
  tags JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  added_by TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies

-- Anyone can read published publications
CREATE POLICY "Published publications are public"
  ON public.publications
  FOR SELECT
  USING (status = 'published');

-- Anon key can read all (for admin dashboard - auth is handled at app level)
CREATE POLICY "Service can read all publications"
  ON public.publications
  FOR SELECT
  TO anon
  USING (true);

-- Anon key can insert (auth handled at app level)
CREATE POLICY "Service can insert publications"
  ON public.publications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Anon key can update (auth handled at app level)
CREATE POLICY "Service can update publications"
  ON public.publications
  FOR UPDATE
  TO anon
  USING (true);

-- Anon key can delete (auth handled at app level)
CREATE POLICY "Service can delete publications"
  ON public.publications
  FOR DELETE
  TO anon
  USING (true);

-- 4. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_publications_year ON public.publications(year DESC);
CREATE INDEX IF NOT EXISTS idx_publications_status ON public.publications(status);
CREATE INDEX IF NOT EXISTS idx_publications_type ON public.publications(type);
CREATE INDEX IF NOT EXISTS idx_publications_featured ON public.publications(is_featured) WHERE is_featured = TRUE;

-- 5. Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_publications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS publications_updated_at ON public.publications;
CREATE TRIGGER publications_updated_at
  BEFORE UPDATE ON public.publications
  FOR EACH ROW
  EXECUTE FUNCTION update_publications_updated_at();

-- Done! The publications table is ready.
-- Use the "Seed Static Data" button in the Publications Dashboard
-- to import existing papers from the static data files.
