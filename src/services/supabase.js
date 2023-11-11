import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yhmqhnsxkggkpbmxcgcy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobXFobnN4a2dna3BibXhjZ2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxODY1NDUsImV4cCI6MjAxMzc2MjU0NX0.RLMIezBS32Ndop4AX2LlflWZ3wbZ0yVoQBC_iJnoPaI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
