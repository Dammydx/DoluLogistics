# SwiftHaul Express — Database Setup Guide

Short guide to create the core database schema and required environment variables for local development and deployment.

## Database schema

### Parcels table

The `parcels` table stores parcel delivery information.

```sql
CREATE TABLE parcels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tracking_id text UNIQUE NOT NULL,
  sender_name text NOT NULL,
  sender_phone text NOT NULL,
  sender_address text NOT NULL,
  receiver_name text NOT NULL,
  receiver_phone text NOT NULL,
  receiver_address text NOT NULL,
  origin_city text NOT NULL,
  destination_city text NOT NULL,
  status text NOT NULL,
  weight_kg numeric NOT NULL,
  delivery_notes text,
  expected_delivery_date timestamptz NOT NULL,
  actual_delivery_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

#### Status values
- `awaiting_pickup` — Parcel is registered but not yet collected
- `in_transit` — Parcel is in the delivery network
- `out_for_delivery` — Parcel is out for final delivery
- `delivered` — Parcel has been delivered
- `delayed` — Delivery is delayed
- `cancelled` — Delivery has been cancelled

### Messages table

The `messages` table stores customer inquiries and support messages.

```sql
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
```

## Row Level Security (RLS)

We recommend enabling Row Level Security on tables that store user data. Below are the high-level policies to consider; adapt them to your auth model in Supabase.

- Parcels table:
  - Allow authenticated users to SELECT, INSERT, UPDATE, and DELETE as appropriate for your app.
- Messages table:
  - Allow anyone to INSERT new messages (contact form).
  - Allow authenticated staff users to SELECT, UPDATE, and DELETE messages.

Example (Supabase/Postgres): enable RLS and add a simple policy:

```sql
ALTER TABLE parcels ENABLE ROW LEVEL SECURITY;

-- example: allow authenticated users to select
CREATE POLICY "authenticated_select" ON parcels
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

Note: adjust policies to use `auth.uid()` or custom claims depending on how you manage users and roles.

## Environment variables

Set the following variables in your `.env` (or deployment settings):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Tips:
- Keep secrets out of version control.
- Use Supabase project settings for production keys and restrict access where necessary.