/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `company_name` (text, optional)
      - `automation_needs` (text, required)
      - `policy_accepted` (boolean, required)
      - `submitted_at` (timestamptz, auto-generated)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for authenticated users to insert their own data
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text,
  automation_needs text NOT NULL,
  policy_accepted boolean NOT NULL DEFAULT false,
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests
CREATE POLICY "Anyone can submit consultation requests"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all consultations (for admin access)
CREATE POLICY "Service role can read all consultations"
  ON consultations
  FOR SELECT
  TO service_role
  USING (true);