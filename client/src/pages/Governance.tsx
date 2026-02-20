import { Link } from "wouter";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * Governance Page - Simplified Compact Design
 * Ethics, compliance, responsibility, stakeholder coordination
 */
export default function Governance() {
  return (
    <>
      <SEO metadata={seoConfig.governance} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Governance" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/governance-justice-background.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6 text-white drop-shadow-lg">Governance & Responsibility</h1>
              <p className="text-subheading text-white drop-shadow-lg font-semibold">
                Ethics, compliance, and responsible resource development aligned
                with institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Governance Framework */}
        <section className="py-10 md:py-12 section-cream border-t border-border">
          <div className="container">
            <div className="mb-4">
              <h2 className="text-heading">Governance Framework</h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-body mb-4">
                Resource Pakistan operates under strict ethical, compliance,
                and governance standards. Our work is structured to support
                institutional decision-making while maintaining
                confidentiality, transparency, and accountability. We
                understand that our recommendations may inform policy and
                institutional decisions, and we structure our engagement
                accordingly.
              </p>
              <p className="text-body">
                We are committed to responsible resource and industrial
                development that integrates environmental protection,
                socio-economic considerations, and long-term sustainability.
                All our work is subject to institutional review and designed
                to withstand scrutiny from government bodies, policy analysts,
                and stakeholder groups.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Compliance and Standards */}
        <section className="py-10 md:py-12 section-green border-t border-border">
          <div className="container">
            <div className="mb-4">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>Compliance and Standards</h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-body mb-4" style={{ color: "#ede0d4" }}>
                Resource Pakistan operates in compliance with Pakistan's
                regulatory frameworks, environmental standards, and
                institutional requirements. All our recommendations are
                designed to support compliance and withstand institutional
                review. We maintain awareness of evolving policy frameworks
                and adjust our advisory services accordingly.
              </p>
              <p className="text-body" style={{ color: "#ede0d4" }}>
                Our engagement methodology integrates compliance requirements
                from the outset, ensuring that all recommendations are
                feasible within Pakistan's institutional and regulatory
                context. We support clients in understanding compliance
                requirements and developing implementation strategies aligned
                with institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Stakeholder Coordination */}
        <section className="py-10 md:py-12 section-cream border-t border-border">
          <div className="container">
            <div className="mb-4">
              <h2 className="text-heading">Stakeholder Coordination</h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-body mb-4">
                Resource development and industrial planning require
                coordination across multiple stakeholder groups including
                government bodies, policy institutions, local communities, and
                strategic partners. We facilitate structured engagement
                processes and support alignment across institutional levels
                and sectoral interests.
              </p>
              <p className="text-body">
                Our stakeholder coordination approach prioritizes
                transparency, documented communication, and institutional
                alignment. We help decision-makers navigate complex
                multi-stakeholder environments and develop consensus around
                feasibility-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 section-green border-t border-border">
          <div className="container text-center">
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "#ede0d4" }}>
              For questions regarding our governance framework, compliance standards, or ethical principles, please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                Get in Touch
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
