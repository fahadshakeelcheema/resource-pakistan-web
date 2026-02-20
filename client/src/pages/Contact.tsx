import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig, buildPageJsonLd } from "@/lib/seo-config";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

/**
 * Contact Page - Minimalist Institutional Design
 * Professional contact form, company information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitInquiry = trpc.inquiries.submit.useMutation({
    onSuccess: data => {
      toast.success(data.message);
      setFormData({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    },
    onError: error => {
      toast.error(
        error.message || "Failed to submit inquiry. Please try again."
      );
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Submit via tRPC
    await submitInquiry.mutateAsync({
      fullName: formData.fullName,
      organization: formData.organization || undefined,
      email: formData.email,
      phone: formData.phone || undefined,
      subject: formData.subject,
      message: formData.message,
    });
  };

  return (
    <>
      <SEO metadata={seoConfig.contact} jsonLd={buildPageJsonLd('contact')} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Contact" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/KMjxsphCydLypviA.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "'Crimson Text', serif", textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)" }}
              >
                Contact Resource Pakistan
              </h1>
              <p className="text-lg text-white leading-relaxed font-semibold" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)" }}>
                For inquiries regarding feasibility studies, advisory services,
                or strategic partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="section-cream py-12 md:py-16 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Company Information */}
              <div className="md:col-span-1">
                <h2
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  Company Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Company Name
                    </h3>
                    <p className="text-base text-foreground">
                      Resource Pakistan (Pvt) Ltd
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Location
                    </h3>
                    <p className="text-base text-foreground">Pakistan</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Operations across Balochistan, KPK, and other regions
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Focus Areas
                    </h3>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>Consultancy & Advisory</li>
                      <li>Mining & Resources</li>
                      <li>Electric Vehicles & Technology</li>
                      <li>Industrial Planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <h2
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  Send Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Organization/Institution
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your organization"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+92 (optional)"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="Mining & Resource Development">
                        Mining & Resource Development
                      </option>
                      <option value="Consultancy & Advisory">
                        Consultancy & Advisory
                      </option>
                      <option value="EVs & Technology">EVs & Technology</option>
                      <option value="Industrial Planning">
                        Industrial Planning
                      </option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    className="px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitInquiry.isPending
                      ? "Submitting..."
                      : "Submit Inquiry"}
                  </button>

                  <p className="text-xs text-muted-foreground">
                    <span className="text-destructive">*</span> Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="section-green py-12 md:py-16 border-t border-border">
          <div className="container">
            <div className="flex flex-col items-center w-full">
              <h2
                className="text-2xl font-bold mb-6 text-center"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  color: "#ffffff",
                }}
              >
                Confidentiality & Professional Standards
              </h2>
              <p
                className="text-base leading-relaxed text-center max-w-xl"
                style={{ color: "#ffffff" }}
              >
                All inquiries and communications with Resource Pakistan are handled with strict confidentiality and professional standards. We understand the sensitive nature of resource development and institutional planning work, and we maintain rigorous information security protocols.
              </p>
              <p
                className="text-base leading-relaxed mt-6 text-center max-w-xl"
                style={{ color: "#ede0d4" }}
              >
                Our team will review your inquiry and respond within 2-3 business days. For time-sensitive matters, please indicate this in your message.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
