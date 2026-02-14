import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * Consultancy Page - Refined Institutional Design
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
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/PGIHvqECYjfwrhnF.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6 text-white drop-shadow-lg">
                Consultancy & Advisory Services
              </h1>
              <p className="text-subheading text-white drop-shadow-lg">
                Strategic planning and advisory services for government bodies,
                policy institutions, and strategic partners.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Our Consultancy Approach with Icon */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">Consultancy Approach</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
              {/* Text Left */}
              <div>
                <p className="text-body mb-6">
                  Resource Pakistan provides advisory services that bridge
                  policy frameworks with operational execution. We work with
                  government bodies, think tanks, and institutional stakeholders
                  to develop feasibility-driven strategies for resource
                  development, industrial planning, and technology assessment.
                </p>
                <p className="text-body">
                  Our consultancy is grounded in rigorous analysis,
                  institutional understanding, and long-term perspective. We
                  structure recommendations to support institutional
                  decision-making processes and withstand scrutiny from policy
                  analysts and stakeholder groups.
                </p>
              </div>

              {/* Diagram Right - Strategic Planning Diagram */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Strategy Hub */}
                  <circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="#1e3a5f"
                    stroke="#2d5a8c"
                    strokeWidth="3"
                  />
                  <text
                    x="200"
                    y="205"
                    fontSize="16"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Strategy
                  </text>

                  {/* Four Pillars */}
                  {/* Top - Policy */}
                  <circle
                    cx="200"
                    cy="80"
                    r="40"
                    fill="#2d5a8c"
                    stroke="#1e3a5f"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="85"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    Policy
                  </text>
                  <line
                    x1="200"
                    y1="140"
                    x2="200"
                    y2="120"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Right - Execution */}
                  <circle
                    cx="320"
                    cy="200"
                    r="40"
                    fill="#2d5a8c"
                    stroke="#1e3a5f"
                    strokeWidth="2"
                  />
                  <text
                    x="320"
                    y="205"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    Execution
                  </text>
                  <line
                    x1="260"
                    y1="200"
                    x2="280"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Bottom - Analysis */}
                  <circle
                    cx="200"
                    cy="320"
                    r="40"
                    fill="#2d5a8c"
                    stroke="#1e3a5f"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="325"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    Analysis
                  </text>
                  <line
                    x1="200"
                    y1="260"
                    x2="200"
                    y2="280"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Left - Stakeholders */}
                  <circle
                    cx="80"
                    cy="200"
                    r="40"
                    fill="#2d5a8c"
                    stroke="#1e3a5f"
                    strokeWidth="2"
                  />
                  <text
                    x="80"
                    y="200"
                    fontSize="11"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    Stake-
                  </text>
                  <text
                    x="80"
                    y="213"
                    fontSize="11"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    holders
                  </text>
                  <line
                    x1="140"
                    y1="200"
                    x2="120"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Connecting Arcs */}
                  <path
                    d="M 220 150 Q 250 120 240 90"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <path
                    d="M 250 220 Q 280 250 270 290"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <path
                    d="M 180 250 Q 150 280 160 310"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <path
                    d="M 150 180 Q 120 150 130 110"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Consultancy Services */}
        <section className="py-12 md:py-16 section-green border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>
                Core Consultancy Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strategic Planning */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredService("strategic")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Strategic Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "strategic" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
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
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Policy Analysis
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "policy" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
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
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Feasibility Assessment
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "feasibility" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
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
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Stakeholder Engagement
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "stakeholder" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Coordination across government bodies, policy institutions,
                    private sector, and strategic partners. We facilitate
                    institutional alignment and long-term planning processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Client Sectors */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">Client Sectors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Government Bodies */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                onMouseEnter={() => setHoveredSector("government")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Government Bodies
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "government" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
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
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Think Tanks & Institutions
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "thinktanks" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
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
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Strategic Partners
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "partners" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
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
        <section className="py-16 md:py-20 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              For consultancy services, strategic planning, or advisory support,
              please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                Request Consultation
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
