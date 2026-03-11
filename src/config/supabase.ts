import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ixopkrxiagblvrzndvfa.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4b3BrcnhpYWdibHZyem5kdmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDUwMDUsImV4cCI6MjA4ODgyMTAwNX0.aGymOjuQ-9js9Mw0cAw9Mzh8HRywN-GiG_PCZlVeqUY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
