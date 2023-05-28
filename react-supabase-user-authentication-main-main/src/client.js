import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://icwmlywvqpertjucfehe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljd21seXd2cXBlcnRqdWNmZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMjA3MjIsImV4cCI6MjAwMDY5NjcyMn0.yn5CN227mZPCB0kTM2icBaixQ5gmL3oxucD74rXqVno'
export const supabase = createClient(supabaseUrl, supabaseKey)