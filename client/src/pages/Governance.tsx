import { Link } from "wouter";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig, buildPageJsonLd } from "@/lib/seo-config";

/**
 * Governance Page - Compact Center-Aligned Design
 * Each paragraph individually uses text-center and max-w-3xl mx-auto
 */
export default function Governance() {
  return (
    <>
      <SEO metadata={seoConfig.governance} jsonLd={buildPageJsonLd('governance')} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Governance" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/xkgFeNPBaBemTEDt.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">Governance & Responsibility</h1>
              <p className="text-lg text-white drop-shadow-lg font-semibold">
                Ethics, compliance, and responsible resource development aligned with institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Governance Framework</h2>
            <p className="text-sm md:text-base mb-3 leading-relaxed text-center max-w-3xl mx-auto">
              Resource Pakistan operates under strict ethical, compliance, and governance standards. Our work is structured to support institutional decision-making while maintaining confidentiality, transparency, and accountability.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
              We are committed to responsible resource and industrial development that integrates environmental protection, socio-economic considerations, and long-term sustainability.
            </p>
          </div>
        </section>

        {/* Compliance and Standards */}
        <section className="py-8 md:py-10 section-green border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ color: "#ffffff" }}>Compliance and Standards</h2>
            <p className="text-sm md:text-base mb-3 leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "#ede0d4" }}>
              Resource Pakistan operates in compliance with Pakistan's regulatory frameworks, environmental standards, and institutional requirements. All our recommendations are designed to support compliance and withstand institutional review.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "#ede0d4" }}>
              Our engagement methodology integrates compliance requirements from the outset, ensuring that all recommendations are feasible within Pakistan's institutional and regulatory context.
            </p>
          </div>
        </section>

        {/* Stakeholder Coordination */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Stakeholder Coordination</h2>
            <p className="text-sm md:text-base mb-3 leading-relaxed text-center max-w-3xl mx-auto">
              Resource development and industrial planning require coordination across multiple stakeholder groups including government bodies, policy institutions, local communities, and strategic partners.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
              Our stakeholder coordination approach prioritizes transparency, documented communication, and institutional alignment.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-12 section-green border-t border-border">
          <div className="container text-center">
            <p className="text-base mb-5 text-center max-w-2xl mx-auto" style={{ color: "#ede0d4" }}>
              For questions regarding our governance framework, compliance standards, or ethical principles, please contact us.
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
