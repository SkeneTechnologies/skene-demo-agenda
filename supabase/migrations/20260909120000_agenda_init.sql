-- Agenda: B2B meeting scheduler used as the Skene Cloud sample product.

create table public.users (
  id uuid primary key,
  email text not null,
  full_name text,
  created_at timestamptz not null default now()
);

create table public.workspaces (
  id uuid primary key,
  name text not null,
  owner_id uuid not null references public.users (id),
  created_at timestamptz not null default now()
);

create table public.members (
  id uuid primary key,
  workspace_id uuid not null references public.workspaces (id),
  user_id uuid not null references public.users (id),
  role text not null,
  invited_at timestamptz,
  joined_at timestamptz
);

create table public.meeting_types (
  id uuid primary key,
  workspace_id uuid not null references public.workspaces (id),
  name text not null,
  duration_minutes integer not null,
  created_at timestamptz not null default now()
);

create table public.bookings (
  id uuid primary key,
  meeting_type_id uuid not null references public.meeting_types (id),
  workspace_id uuid not null references public.workspaces (id),
  guest_email text not null,
  starts_at timestamptz not null,
  source text,
  created_at timestamptz not null default now()
);

create table public.subscriptions (
  id uuid primary key,
  workspace_id uuid not null references public.workspaces (id),
  plan text not null,
  status text not null,
  amount_cents integer,
  trial_started_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now()
);
