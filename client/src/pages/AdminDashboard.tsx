import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Inquiry = {
  id: number;
  fullName: string;
  organization: string | null;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "resolved";
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");

  const {
    data: inquiries = [],
    isLoading,
    refetch,
  } = trpc.inquiries.list.useQuery(
    { status: statusFilter, search: searchTerm || undefined },
    { enabled: user?.role === "admin" }
  );

  const updateStatusMutation = trpc.inquiries.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status updated successfully");
      refetch();
    },
    onError: () => {
      toast.error("Failed to update status");
    },
  });

  const updateNotesMutation = trpc.inquiries.updateNotes.useMutation({
    onSuccess: () => {
      toast.success("Notes saved successfully");
      refetch();
      setDialogOpen(false);
    },
    onError: () => {
      toast.error("Failed to save notes");
    },
  });

  // Redirect non-admin users
  if (!authLoading && user?.role !== "admin") {
    navigate("/");
    return null;
  }

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const handleStatusChange = (
    id: number,
    status: "new" | "in_progress" | "resolved"
  ) => {
    updateStatusMutation.mutate({ id, status });
  };

  const handleViewDetails = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setAdminNotes(inquiry.adminNotes || "");
    setDialogOpen(true);
  };

  const handleSaveNotes = () => {
    if (selectedInquiry) {
      updateNotesMutation.mutate({
        id: selectedInquiry.id,
        adminNotes,
      });
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formatStatus = (status: string) => {
    return status.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-display mb-4">Admin Dashboard</h1>
            <p className="text-subheading text-muted-foreground">
              Manage and respond to contact form inquiries
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by name, email, organization, or subject..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Inquiries</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Inquiries Table */}
          <div className="card-institutional overflow-hidden">
            {inquiries.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No inquiries found
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Organization
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Subject
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {inquiries.map(inquiry => (
                      <tr
                        key={inquiry.id}
                        className="hover:bg-secondary/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {inquiry.fullName}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {inquiry.organization || "—"}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground">
                          {inquiry.subject}
                        </td>
                        <td className="px-6 py-4">
                          <Select
                            value={inquiry.status}
                            onValueChange={value =>
                              handleStatusChange(
                                inquiry.id,
                                value as "new" | "in_progress" | "resolved"
                              )
                            }
                          >
                            <SelectTrigger
                              className={`w-32 text-xs border ${getStatusBadgeClass(inquiry.status)}`}
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="in_progress">
                                In Progress
                              </SelectItem>
                              <SelectItem value="resolved">Resolved</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-6 py-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(inquiry)}
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Inquiry Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedInquiry && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Inquiry Details</DialogTitle>
                <DialogDescription>
                  Submitted on{" "}
                  {new Date(selectedInquiry.createdAt).toLocaleString()}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Full Name
                      </p>
                      <p className="text-base">{selectedInquiry.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Organization
                      </p>
                      <p className="text-base">
                        {selectedInquiry.organization || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Email
                      </p>
                      <p className="text-base">{selectedInquiry.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Phone
                      </p>
                      <p className="text-base">
                        {selectedInquiry.phone || "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subject & Message */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Inquiry</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Subject
                      </p>
                      <p className="text-base">{selectedInquiry.subject}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Message
                      </p>
                      <p className="text-base whitespace-pre-wrap">
                        {selectedInquiry.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Admin Notes */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Admin Notes</h3>
                  <Textarea
                    value={adminNotes}
                    onChange={e => setAdminNotes(e.target.value)}
                    placeholder="Add internal notes about this inquiry..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveNotes}
                    disabled={updateNotesMutation.isPending}
                  >
                    {updateNotesMutation.isPending ? "Saving..." : "Save Notes"}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
