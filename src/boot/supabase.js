import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://kmxrxybhnksrsjbuaoqo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtteHJ4eWJobmtzcnNqYnVhb3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5NjYyMjYsImV4cCI6MTk3MjU0MjIyNn0.oUZJTEoiuGKPTcqrI6CS1D4u-dRn_3v2WSzcAU_B54Q'
const supabase = createClient(supabaseURL, supabaseKey)

export default function useSupabase () {
  return { supabase }
}
