import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const Route = createFileRoute("/admin/dashboard")({
  beforeLoad: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: AdminDashboard,
});

type ProjectRequest = {
  id: string;
  created_at: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  project_type: string;
  budget_range: string;
  deadline: string;
  description: string;
  status: string;
};

const statusOptions = ["جديد", "تحت المراجعة", "تم عرض سعر", "موافق", "مرفوض"];

function AdminDashboard() {
  const [requests, setRequests] = useState<ProjectRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("project_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setRequests(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("project_requests")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req)),
      );
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Project Requests</h1>
          <button
            onClick={handleLogout}
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-4">
          {requests.length === 0 ? (
            <p className="text-muted-foreground">No requests found.</p>
          ) : (
            requests.map((req) => (
              <div key={req.id} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{req.client_name}</h3>
                    <div className="mt-1 text-sm text-muted-foreground flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <span>{req.client_email}</span>
                      <span>{req.client_phone}</span>
                      <span>{new Date(req.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <select
                    value={req.status || "جديد"}
                    onChange={(e) => updateStatus(req.id, e.target.value)}
                    className="rounded-md border bg-background px-3 py-1 text-sm outline-none font-medium"
                    dir="rtl"
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-md bg-muted/50 p-3">
                    <span className="block text-xs font-medium text-muted-foreground uppercase">
                      Project Type
                    </span>
                    <span className="mt-1 block text-sm">{req.project_type}</span>
                  </div>
                  <div className="rounded-md bg-muted/50 p-3">
                    <span className="block text-xs font-medium text-muted-foreground uppercase">
                      Budget
                    </span>
                    <span className="mt-1 block text-sm">{req.budget_range}</span>
                  </div>
                  <div className="rounded-md bg-muted/50 p-3">
                    <span className="block text-xs font-medium text-muted-foreground uppercase">
                      Deadline
                    </span>
                    <span className="mt-1 block text-sm">{req.deadline || "N/A"}</span>
                  </div>
                </div>

                <div className="mt-4 rounded-md bg-muted/30 p-4">
                  <span className="block text-xs font-medium text-muted-foreground uppercase">
                    Description
                  </span>
                  <p className="mt-2 text-sm whitespace-pre-wrap">{req.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
