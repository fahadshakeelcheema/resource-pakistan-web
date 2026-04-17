import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig, buildPageJsonLd } from "@/lib/seo-config";

/**
 * Mining Page - Compact Institutional Design
 * Responsible mineral development, feasibility studies, compliance
 */
export default function Mining() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <>
      <SEO metadata={seoConfig.mining} jsonLd={buildPageJsonLd('mining')} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Mining" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/dfVjdqcQkxjdPbeb.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-4 text-white drop-shadow-lg">
                Mining & Resource Development
              </h1>
              <p className="text-subheading text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}>
                Responsible mineral development through comprehensive
                feasibility assessment and institutional alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Feasibility-Driven Resource Development */}
        <section className="py-6 md:py-8 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Feasibility-Driven Resource Development
            </h2>
            <p className="text-lg text-muted-foreground mb-3 leading-relaxed text-center max-w-3xl mx-auto">
              Mining and resource extraction require rigorous feasibility
              assessment, compliance planning, and long-term value-chain
              analysis. Resource Pakistan provides comprehensive advisory
              services covering geological assessment, economic viability,
              regulatory compliance, and implementation planning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Our approach integrates technical analysis with institutional
              requirements, ensuring that resource development projects are
              both economically sound and aligned with Pakistan's policy
              frameworks and environmental standards.
            </p>

            {/* Linear Feasibility Process Diagram */}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 800 80"
                className="w-full max-w-3xl h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Step 1: Geological Assessment */}
                <rect x="0" y="10" width="170" height="55" fill="#2d5a8c" rx="6" />
                <text x="85" y="32" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Geological</text>
                <text x="85" y="48" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Assessment</text>

                {/* Arrow 1 */}
                <line x1="175" y1="37" x2="200" y2="37" stroke="#095d29" strokeWidth="3" />
                <polygon points="205,37 195,32 195,42" fill="#095d29" />

                {/* Step 2: Economic Viability */}
                <rect x="210" y="10" width="170" height="55" fill="#2d5a8c" rx="6" />
                <text x="295" y="32" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Economic</text>
                <text x="295" y="48" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Viability</text>

                {/* Arrow 2 */}
                <line x1="385" y1="37" x2="410" y2="37" stroke="#095d29" strokeWidth="3" />
                <polygon points="415,37 405,32 405,42" fill="#095d29" />

                {/* Step 3: Regulatory Compliance */}
                <rect x="420" y="10" width="170" height="55" fill="#2d5a8c" rx="6" />
                <text x="505" y="32" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Regulatory</text>
                <text x="505" y="48" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Compliance</text>

                {/* Arrow 3 */}
                <line x1="595" y1="37" x2="620" y2="37" stroke="#095d29" strokeWidth="3" />
                <polygon points="625,37 615,32 615,42" fill="#095d29" />

                {/* Step 4: Implementation Plan */}
                <rect x="630" y="10" width="170" height="55" fill="#1e3a5f" rx="6" />
                <text x="715" y="32" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Implementation</text>
                <text x="715" y="48" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Plan</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="py-6 md:py-8 section-light border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center mb-4 text-foreground">
              Core Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Feasibility Studies */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("feasibility")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Feasibility Studies
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredService === "feasibility" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Comprehensive assessment of geological potential, economic
                    viability, market conditions, and implementation
                    requirements. We prioritize realistic analysis over
                    optimistic projections.
                  </p>
                </div>
              </div>

              {/* Compliance & Regulatory Planning */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("compliance")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Compliance & Regulatory Planning
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredService === "compliance" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Navigation of Pakistan's regulatory frameworks,
                    environmental standards, and institutional requirements. We
                    ensure projects are structured for institutional approval
                    and long-term sustainability.
                  </p>
                </div>
              </div>

              {/* Value-Chain Analysis */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("valuechain")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Value-Chain Analysis
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredService === "valuechain" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Assessment of extraction, processing, and market dynamics.
                    We identify opportunities for value addition and
                    institutional coordination across the supply chain.
                  </p>
                </div>
              </div>

              {/* Stakeholder Coordination */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("stakeholder")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Stakeholder Coordination
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredService === "stakeholder" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Engagement with government bodies, policy institutions,
                    local stakeholders, and strategic partners. We facilitate
                    institutional alignment and long-term planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Geological Context - No image */}
        <section className="py-6 md:py-8 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center">Pakistan's Geological Context</h2>
            <p className="text-body text-center max-w-3xl mx-auto mb-3">
              Pakistan's geological diversity spans multiple tectonic zones,
              creating significant mineral potential across Balochistan,
              Khyber Pakhtunkhwa, and other regions. Understanding this
              geological context is essential for feasibility assessment and
              responsible resource development.
            </p>
            <p className="text-body text-center max-w-3xl mx-auto">
              Our work integrates geological data, tectonic analysis, and
              regional mineral surveys to provide comprehensive assessment
              of resource opportunities and extraction viability.
            </p>
          </div>
        </section>

        {/* Section 4: Technical Knowledge - No diagram */}
        <section className="py-6 md:py-8 section-light border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center">
              Technical Knowledge and Expertise
            </h2>
            <p className="text-body text-center max-w-3xl mx-auto mb-3">
              Our team brings together professionals with experience in
              geological assessment, mining engineering, environmental
              impact analysis, and institutional planning. We have worked on
              projects across Pakistan's major mineral-bearing regions,
              developing deep understanding of local geology, regulatory
              requirements, and institutional dynamics.
            </p>
            <p className="text-body text-center max-w-3xl mx-auto">
              We combine technical rigor with institutional awareness,
              ensuring that our recommendations are both analytically sound
              and operationally feasible within Pakistan's policy and
              governance frameworks.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 md:py-8 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              For mining feasibility studies, compliance planning, or resource
              development advisory, please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                Inquire Now
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
