-- ============================================================
-- FitSquad Business – Supabase schema
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor)
-- ============================================================

-- ── Tables ────────────────────────────────────────────────────

create table if not exists public.companies (
  id             uuid default gen_random_uuid() primary key,
  name           text not null,
  domain         text default '',
  plan           text not null default 'growth',  -- starter | growth | enterprise
  admin_id       uuid references auth.users(id) on delete set null,
  billing_email  text,
  employee_seats integer default 100,
  created_at     timestamptz default now()
);

-- Public user profiles (one row per auth.users row)
create table if not exists public.users (
  id           uuid references auth.users(id) on delete cascade primary key,
  email        text,
  display_name text,
  role         text,           -- admin | manager | employee
  company_id   uuid references public.companies(id) on delete set null,
  department   text default '',
  is_active    boolean default true,
  created_at   timestamptz default now()
);

create table if not exists public.invitations (
  id          uuid default gen_random_uuid() primary key,
  company_id  uuid references public.companies(id) on delete cascade,
  email       text not null,
  role        text default 'employee',
  department  text default '',
  invited_by  uuid references auth.users(id) on delete set null,
  status      text default 'pending',  -- pending | accepted | expired
  created_at  timestamptz default now()
);

create table if not exists public.challenges (
  id          uuid default gen_random_uuid() primary key,
  company_id  uuid references public.companies(id) on delete cascade,
  title       text not null,
  description text default '',
  type        text not null,   -- workouts | minutes | streak
  goal        integer not null,
  start_date  date,
  end_date    date,
  created_by  uuid references auth.users(id) on delete set null,
  is_active   boolean default true,
  created_at  timestamptz default now()
);

create table if not exists public.workouts (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references auth.users(id) on delete cascade,
  user_name    text,
  company_id   uuid references public.companies(id) on delete cascade,
  challenge_id uuid references public.challenges(id) on delete set null,
  type         text not null,
  duration     integer not null,
  notes        text default '',
  created_at   timestamptz default now()
);

-- ── Indexes ───────────────────────────────────────────────────

create index if not exists idx_users_company      on public.users(company_id);
create index if not exists idx_invitations_company on public.invitations(company_id);
create index if not exists idx_challenges_company  on public.challenges(company_id);
create index if not exists idx_workouts_company    on public.workouts(company_id);
create index if not exists idx_workouts_user       on public.workouts(user_id);

-- ── Trigger: auto-create profile on sign-up ───────────────────

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── Row-Level Security ────────────────────────────────────────

alter table public.users        enable row level security;
alter table public.companies    enable row level security;
alter table public.invitations  enable row level security;
alter table public.challenges   enable row level security;
alter table public.workouts     enable row level security;

-- users
create policy "Own profile" on public.users
  for all using (auth.uid() = id);

create policy "View teammates" on public.users
  for select using (
    company_id in (select company_id from public.users where id = auth.uid())
  );

-- companies
create policy "Members can view company" on public.companies
  for select using (
    id in (select company_id from public.users where id = auth.uid())
  );

create policy "Insert own company" on public.companies
  for insert with check (admin_id = auth.uid());

create policy "Admin can update company" on public.companies
  for update using (admin_id = auth.uid());

-- invitations: admins & managers manage; anyone can read by id (for invite links)
create policy "Admins manage invitations" on public.invitations
  for all using (
    company_id in (
      select company_id from public.users
      where id = auth.uid() and role in ('admin', 'manager')
    )
  );

create policy "Anyone can read invitation" on public.invitations
  for select using (true);

-- challenges
create policy "Members view challenges" on public.challenges
  for select using (
    company_id in (select company_id from public.users where id = auth.uid())
  );

create policy "Admins manage challenges" on public.challenges
  for all using (
    company_id in (
      select company_id from public.users
      where id = auth.uid() and role in ('admin', 'manager')
    )
  );

-- workouts
create policy "Own workouts" on public.workouts
  for all using (user_id = auth.uid());

create policy "Members view workouts" on public.workouts
  for select using (
    company_id in (select company_id from public.users where id = auth.uid())
  );
