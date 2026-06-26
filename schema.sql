-- Create an ENUM type for status if needed, or just use TEXT with a check constraint.
CREATE TYPE project_request_status AS ENUM ('جديد', 'تحت المراجعة', 'تم عرض سعر', 'موافق', 'مرفوض');

-- Create the table
CREATE TABLE project_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  project_type TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  deadline TEXT,
  description TEXT,
  status project_request_status DEFAULT 'جديد'
);

-- Enable Row Level Security (RLS)
ALTER TABLE project_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert new requests
CREATE POLICY "Allow anonymous insert" ON project_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admin) to view and update requests
CREATE POLICY "Allow admin to select" ON project_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow admin to update" ON project_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
