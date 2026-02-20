import { Link } from "wouter";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * About Us Page - Compact Center-Aligned Design
 * Company background, mission, expertise
 */
export default function About() {
  return (
    <>
      <SEO metadata={seoConfig.about} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "About Us" }]} />

      <main className="flex-1">
        {/* Hero Section - Logo on Industrial Backdrop */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/HjuvozCNZQjtDKdL.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
          <div className="container relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <img 
                src="/images/resource-pakistan-logo.png" 
                alt="Resource Pakistan" 
                className="h-32 w-auto mx-auto mb-4 drop-shadow-2xl" 
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">About Resource Pakistan</h1>
              <p className="text-lg text-white drop-shadow-lg font-semibold">
                Strategic advisory, resource development, and institutional planning.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Scope - Compact */}
        <section className="py-8 md:py-10 bg-white border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Mission and Scope</h2>
              <p className="text-sm md:text-base mb-3 leading-relaxed">
                Resource Pakistan (Pvt) Ltd is a strategic advisory and development firm focused on resource development, industrial planning, and institutional consultancy. We work with government bodies, policy institutions, and strategic partners to advance feasibility-driven projects across mining, consultancy, electric vehicles, and industrial technology sectors.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our mission is to support Pakistan's long-term economic development through rigorous analysis, responsible resource planning, and institutional alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise and Experience - Compact */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Expertise and Experience</h2>
              <p className="text-sm md:text-base mb-3 leading-relaxed">
                Our team comprises professionals with extensive experience in resource development, institutional planning, technology assessment, and strategic advisory. We have worked across government bodies, policy institutions, and private sector organizations.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our expertise spans feasibility study methodology, environmental and social impact assessment, technology evaluation, industrial policy analysis, and stakeholder coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Ethics, Compliance, and Confidentiality - Compact */}
        <section className="py-8 md:py-10 section-green border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
                Ethics, Compliance, and Confidentiality
              </h2>
              <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: "#ede0d4" }}>
                Resource Pakistan operates under strict ethical and compliance standards. We maintain confidentiality regarding all client information, project details, and strategic discussions.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#ede0d4" }}>
                We are committed to responsible resource development that integrates environmental protection, community considerations, and long-term sustainability. All our recommendations are subject to institutional review and designed to withstand scrutiny from government bodies, policy analysts, and stakeholder groups.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Compact */}
        <section className="py-10 md:py-12 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-base mb-5 max-w-2xl mx-auto">
              For inquiries regarding our services, strategic partnerships, or institutional engagements, please contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
