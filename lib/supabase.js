import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://wjbwobxiekyzfcjxjnkt.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqYndvYnhpZWt5emZjanhqbmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MjM2NjksImV4cCI6MjA0MjM5OTY2OX0.ZxFEGTy13K5JCG6ajWLk3g-WT3Wb3oqCQDKZ5FuzkD8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;