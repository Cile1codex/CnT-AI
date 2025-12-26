import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types for our database
export interface ConsultationRequest {
  id?: string;
  full_name: string;
  email: string;
  company_name?: string;
  automation_needs: string;
  policy_accepted: boolean;
  submitted_at?: string;
}