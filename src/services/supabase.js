import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mytwiyrmvmyuhdssdgej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15dHdpeXJtdm15dWhkc3NkZ2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NTM5MDAsImV4cCI6MjAxNTEyOTkwMH0.vnFdIY_uTPCClxuglXAt4VJfNwIdSZsXv-3MfH-55H4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
