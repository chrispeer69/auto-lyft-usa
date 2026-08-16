import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Whether the contact form has a database to write to.
 *
 * Deliberately does NOT throw when the credentials are missing. This is an
 * emergency towing site — if the Supabase config is wrong, the phone number
 * and every other section must still render. Only the contact form degrades.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.error(
    'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. The contact form is ' +
      'disabled and will ask visitors to call instead. Set both variables in ' +
      'your host (Railway → Variables) and rebuild.'
  );
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/** A row in the `contact_requests` table. */
export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service_type: string;
  message: string;
};
