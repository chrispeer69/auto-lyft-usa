import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Copy .env.example to .env and fill them in.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** A row in the `contact_requests` table. */
export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service_type: string;
  message: string;
};
