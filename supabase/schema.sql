-- Schema for the contact form on autolyftusa.online.
--
-- Run this in your own Supabase project (SQL Editor -> New query -> Run) to
-- recreate the table the website writes to. Then put that project's URL and
-- anon key in .env and in your Netlify environment variables.

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  location text not null,
  service_type text not null,
  message text
);

alter table public.contact_requests enable row level security;

-- Anyone (an anonymous website visitor) may submit a request...
create policy "Anyone can submit a contact request"
  on public.contact_requests
  for insert
  to anon
  with check (true);

-- ...but nobody anonymous can read them back. Only signed-in staff can.
create policy "Authenticated users can read contact requests"
  on public.contact_requests
  for select
  to authenticated
  using (true);

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);
