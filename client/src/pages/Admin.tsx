import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, Loader2, Mail, Phone, Building2, Calendar, MessageSquare, Download, Send, TrendingUp, Users, Clock, BarChart3 } from "lucide-react";
import { responseTemplates, fillTemplate, type ResponseTemplate } from "@shared/responseTemplates";

type InquiryStatus = "new" | "in_progress" | "resolved";

export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiryId, setSelectedInquiryId] = useState<number | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [responseSubject, setResponseSubject] = useState("");
  const [responseBody, setResponseBody] = useState("");
  const [showResponseForm, setShowResponseForm] = useState(false);

  const { data: analytics } = trpc.inquiries.analytics.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const { data: inquiries, isLoading, refetch } = trpc.inquiries.list.useQuery(
    {
      status: statusFilter,
      search: searchTerm || undefined,
    },
    {
      enabled: user?.role === "admin",
    }
  );

  const { data: selectedInquiry } = trpc.inquiries.getById.useQuery(
    { id: selectedInquiryId! },
    { enabled: selectedInquiryId !== null }
  );

  const updateStatusMutation = trpc.inquiries.updateStatus.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const updateNotesMutation = trpc.inquiries.updateNotes.useMutation({
    onSuccess: () => {
      refetch();
      setSelectedInquiryId(null);
    },
  });

  const handleStatusChange = (id: number, status: InquiryStatus) => {
    updateStatusMutation.mutate({ id, status });
  };

  const handleSaveNotes = () => {
    if (selectedInquiryId) {
      updateNotesMutation.mutate({
        id: selectedInquiryId,
        adminNotes,
      });
    }
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const template = responseTemplates.find((t) => t.id === templateId);
    if (template && selectedInquiry) {
      const filled = fillTemplate(template, {
        name: selectedInquiry.fullName,
        subject: selectedInquiry.subject,
        organization: selectedInquiry.organization || "",
      });
      setResponseSubject(filled.subject);
      setResponseBody(filled.body);
    }
  };

  const handleSendResponse = () => {
    if (!selectedInquiry) return;
    
    // Create mailto link with pre-filled content
    const mailtoLink = `mailto:${selectedInquiry.email}?subject=${encodeURIComponent(responseSubject)}&body=${encodeURIComponent(responseBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setShowResponseForm(false);
    setSelectedTemplateId("");
    setResponseSubject("");
    setResponseBody("");
  };

  const exportToCSV = () => {
    if (!inquiries || inquiries.length === 0) return;

    // CSV headers
    const headers = [
      "ID",
      "Date",
      "Name",
      "Email",
      "Organization",
      "Phone",
      "Subject",
      "Message",
      "Status",
      "Admin Notes",
    ];

    // CSV rows
    const rows = inquiries.map((inquiry) => [
      inquiry.id,
      new Date(inquiry.createdAt).toLocaleString(),
      inquiry.fullName,
      inquiry.email,
      inquiry.organization || "",
      inquiry.phone || "",
      inquiry.subject,
      inquiry.message.replace(/\n/g, " ").replace(/"/g, '""'), // Escape quotes and newlines
      inquiry.status,
      (inquiry.adminNotes || "").replace(/\n/g, " ").replace(/"/g, '""'),
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${cell}"`).join(",")
      ),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `inquiries-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      new: { variant: "destructive", label: "New" },
      in_progress: { variant: "default", label: "In Progress" },
      resolved: { variant: "secondary", label: "Resolved" },
    };
    const config = variants[status] || { variant: "outline", label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  // Authentication check
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Authentication Required</h1>
            <p className="text-muted-foreground mb-6">
              You need to be logged in to access the admin dashboard.
            </p>
            <Button asChild>
              <a href={getLoginUrl()}>Login</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-6">
              You do not have permission to access the admin dashboard.
            </p>
            <Button asChild variant="outline">
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage contact form submissions and inquiries
            </p>
          </div>

          {/* Analytics Overview */}
          {analytics && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Total Inquiries</div>
                </div>
                <div className="text-3xl font-bold">{analytics.totalInquiries}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {analytics.newInquiries} new, {analytics.inProgressInquiries} in progress
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">This Week</div>
                </div>
                <div className="text-3xl font-bold">{analytics.submissionsThisWeek}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {analytics.submissionsThisMonth} this month
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Avg Response Time</div>
                </div>
                <div className="text-3xl font-bold">
                  {analytics.averageResponseTime !== null
                    ? `${Math.round(analytics.averageResponseTime)}h`
                    : "N/A"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Time to resolution
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Top Category</div>
                </div>
                <div className="text-2xl font-bold">
                  {analytics.categoryDistribution.sort((a, b) => b.count - a.count)[0]?.category || "N/A"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {analytics.categoryDistribution.sort((a, b) => b.count - a.count)[0]?.count || 0} inquiries
                </div>
              </div>
            </div>
          )}

          {/* Filters and Export */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, organization, or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={exportToCSV}
              disabled={!inquiries || inquiries.length === 0}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {/* Inquiries List */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : inquiries && inquiries.length > 0 ? (
            <div className="bg-card rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Name</th>
                      <th className="text-left p-4 font-semibold hidden md:table-cell">
                        Organization
                      </th>
                      <th className="text-left p-4 font-semibold hidden lg:table-cell">
                        Subject
                      </th>
                      <th className="text-left p-4 font-semibold">Status</th>
                      <th className="text-left p-4 font-semibold hidden sm:table-cell">
                        Date
                      </th>
                      <th className="text-left p-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inquiry) => (
                      <tr key={inquiry.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="p-4">
                          <div className="font-medium">{inquiry.fullName}</div>
                          <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          {inquiry.organization || "—"}
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <div className="max-w-xs truncate">{inquiry.subject}</div>
                        </td>
                        <td className="p-4">{getStatusBadge(inquiry.status)}</td>
                        <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedInquiryId(inquiry.id);
                                setAdminNotes(inquiry.adminNotes || "");
                              }}
                            >
                              View
                            </Button>
                            {inquiry.status === "new" && (
                              <Button
                                size="sm"
                                onClick={() => handleStatusChange(inquiry.id, "in_progress")}
                              >
                                Start
                              </Button>
                            )}
                            {inquiry.status === "in_progress" && (
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => handleStatusChange(inquiry.id, "resolved")}
                              >
                                Resolve
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border">
              <p className="text-muted-foreground">No inquiries found</p>
            </div>
          )}
        </div>
      </main>

      {/* Inquiry Detail Dialog */}
      <Dialog open={selectedInquiryId !== null} onOpenChange={() => setSelectedInquiryId(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
            <DialogDescription>
              View and manage inquiry information
            </DialogDescription>
          </DialogHeader>

          {selectedInquiry && (
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">{selectedInquiry.fullName}</div>
                      <div className="text-sm text-muted-foreground">{selectedInquiry.email}</div>
                    </div>
                  </div>
                  {selectedInquiry.organization && (
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="text-sm">{selectedInquiry.organization}</div>
                    </div>
                  )}
                  {selectedInquiry.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="text-sm">{selectedInquiry.phone}</div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject and Message */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Inquiry</h3>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Subject</div>
                  <div>{selectedInquiry.subject}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </div>
                  <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
                    {selectedInquiry.message}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Status</h3>
                <div className="flex items-center gap-2">
                  {getStatusBadge(selectedInquiry.status)}
                  <div className="flex gap-2 ml-auto">
                    {selectedInquiry.status !== "in_progress" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(selectedInquiry.id, "in_progress")}
                      >
                        Mark In Progress
                      </Button>
                    )}
                    {selectedInquiry.status !== "resolved" && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleStatusChange(selectedInquiry.id, "resolved")}
                      >
                        Mark Resolved
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Response Templates */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Send Response</h3>
                  {!showResponseForm && (
                    <Button
                      size="sm"
                      onClick={() => setShowResponseForm(true)}
                      variant="outline"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Compose Response
                    </Button>
                  )}
                </div>

                {showResponseForm && (
                  <div className="space-y-4 border rounded-lg p-4 bg-muted/30">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Select Template
                      </label>
                      <Select value={selectedTemplateId} onValueChange={handleTemplateSelect}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a response template..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Blank (No Template)</SelectItem>
                          {responseTemplates.map((template) => (
                            <SelectItem key={template.id} value={template.id}>
                              {template.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        value={responseSubject}
                        onChange={(e) => setResponseSubject(e.target.value)}
                        placeholder="Email subject..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        value={responseBody}
                        onChange={(e) => setResponseBody(e.target.value)}
                        placeholder="Email body..."
                        rows={10}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleSendResponse}
                        disabled={!responseSubject || !responseBody}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Open in Email Client
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setShowResponseForm(false);
                          setSelectedTemplateId("");
                          setResponseSubject("");
                          setResponseBody("");
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Admin Notes */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Admin Notes</h3>
                <Textarea
                  placeholder="Add internal notes about this inquiry..."
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleSaveNotes} disabled={updateNotesMutation.isPending}>
                  {updateNotesMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Notes"
                  )}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
