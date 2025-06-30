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
      - `submitted_at` (timestamp)
  2. Security
    - Enable RLS on `consultations` table
    - Add policy for public consultation submissions
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

CREATE POLICY "Enable insert for consultation submissions"
  ON consultations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);