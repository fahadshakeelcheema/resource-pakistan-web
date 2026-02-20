import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * Consultancy Page - Compact Center-Aligned Design
 * Advisory services, feasibility planning, stakeholder coordination
 */
export default function Consultancy() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  return (
    <>
      <SEO metadata={seoConfig.consultancy} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Consultancy" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/MPztWmWUIhRSBNqL.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
                Consultancy & Advisory Services
              </h1>
              <p className="text-lg text-white drop-shadow-lg font-semibold">
                Strategic planning and advisory services for government bodies,
                policy institutions, and strategic partners.
              </p>
            </div>
          </div>
        </section>

        {/* Consultancy Approach - Center Aligned, No SVG */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Consultancy Approach</h2>
            <p className="text-sm md:text-base mb-3 leading-relaxed text-center max-w-3xl mx-auto">
              Resource Pakistan provides advisory services that bridge
              policy frameworks with operational execution. We work with
              government bodies, think tanks, and institutional stakeholders
              to develop feasibility-driven strategies for resource
              development, industrial planning, and technology assessment.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
              Our consultancy is grounded in rigorous analysis,
              institutional understanding, and long-term perspective. We
              structure recommendations to support institutional
              decision-making processes and withstand scrutiny from policy
              analysts and stakeholder groups.
            </p>
          </div>
        </section>

        {/* Core Consultancy Services */}
        <section className="py-8 md:py-10 section-green border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#ffffff" }}>
              Core Consultancy Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Strategic Planning */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("strategic")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Strategic Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "strategic" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm" style={{ color: "#c8bfb6" }}>
                    Long-term planning for resource development, industrial
                    strategy, and technology initiatives. We support
                    institutional decision-making with comprehensive analysis
                    and feasibility assessment.
                  </p>
                </div>
              </div>

              {/* Policy Analysis */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("policy")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Policy Analysis
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "policy" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm" style={{ color: "#c8bfb6" }}>
                    Assessment of policy frameworks, regulatory requirements,
                    and institutional alignment. We help identify opportunities
                    and constraints within Pakistan's governance structures.
                  </p>
                </div>
              </div>

              {/* Feasibility Assessment */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("feasibility")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Feasibility Assessment
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "feasibility" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm" style={{ color: "#c8bfb6" }}>
                    Comprehensive evaluation of proposed initiatives across
                    mining, technology, industrial planning, and development
                    sectors. We prioritize realistic assessment and clear
                    communication of constraints.
                  </p>
                </div>
              </div>

              {/* Stakeholder Engagement */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("stakeholder")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Stakeholder Engagement
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "stakeholder" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm" style={{ color: "#c8bfb6" }}>
                    Coordination across government bodies, policy institutions,
                    private sector, and strategic partners. We facilitate
                    institutional alignment and long-term planning processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Sectors */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Client Sectors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* Government Bodies */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                onMouseEnter={() => setHoveredSector("government")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Government Bodies
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "government" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground">
                    Advisory services for ministries, agencies, and policy
                    institutions. We support institutional planning and
                    strategic decision-making.
                  </p>
                </div>
              </div>

              {/* Think Tanks & Institutions */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                onMouseEnter={() => setHoveredSector("thinktanks")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Think Tanks & Institutions
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "thinktanks" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground">
                    Research support, policy analysis, and feasibility
                    assessment for institutional research and planning
                    initiatives.
                  </p>
                </div>
              </div>

              {/* Strategic Partners */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                onMouseEnter={() => setHoveredSector("partners")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Strategic Partners
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "partners" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground">
                    Advisory services for investors, development organizations,
                    and strategic partners seeking to understand Pakistan's
                    resource and industrial landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-10 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-base mb-4 text-center max-w-2xl mx-auto text-muted-foreground">
              For consultancy services, strategic planning, or advisory support,
              please contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
