import type { SupabaseClient } from '@supabase/supabase-js';

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

let client: SupabaseClient | null = null;

/**
 * Loads the Supabase client on first use, in the browser only.
 *
 * The import is dynamic for two reasons. It keeps ~120KB of client library out
 * of the initial bundle on every page when only the contact form needs it. And
 * it keeps supabase-js out of the prerender step entirely: the library builds a
 * realtime client on construction, which needs a global WebSocket that Node 20
 * does not provide, and that crashed the production build.
 */
export async function getSupabase(): Promise<SupabaseClient | null> {
  if (!isSupabaseConfigured || typeof window === 'undefined') return null;
  if (client) return client;

  const { createClient } = await import('@supabase/supabase-js');
  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}

/** A row in the `contact_requests` table. */
export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service_type: string;
  message: string;
};
