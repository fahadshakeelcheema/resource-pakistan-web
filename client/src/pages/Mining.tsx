import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

/**
 * Mining Page - Refined Institutional Design
 * Responsible mineral development, feasibility studies, compliance
 */
export default function Mining() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Mining" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-10 md:py-10 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/bSfMnSMVuLdvxHwI.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6 text-white drop-shadow-lg">
                Mining & Resource Development
              </h1>
              <p className="text-subheading text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}>
                Responsible mineral development through comprehensive
                feasibility assessment and institutional alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Our Approach to Mining - Alternating Layout */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
              {/* Text Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Feasibility-Driven Resource Development
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mining and resource extraction require rigorous feasibility
                  assessment, compliance planning, and long-term value-chain
                  analysis. Resource Pakistan provides comprehensive advisory
                  services covering geological assessment, economic viability,
                  regulatory compliance, and implementation planning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach integrates technical analysis with institutional
                  requirements, ensuring that resource development projects are
                  both economically sound and aligned with Pakistan's policy
                  frameworks and environmental standards.
                </p>
              </div>

              {/* Icon Right - Feasibility Process Flow Diagram */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 400 450"
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Title */}
                  <text
                    x="200"
                    y="30"
                    fontSize="18"
                    fill="#095d29"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Feasibility Process
                  </text>

                  {/* Step 1: Geological Assessment */}
                  <rect
                    x="100"
                    y="60"
                    width="200"
                    height="60"
                    fill="#2d5a3d"
                    rx="8"
                  />
                  <text
                    x="200"
                    y="85"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Geological Assessment
                  </text>
                  <text
                    x="200"
                    y="105"
                    fontSize="11"
                    fill="#c8bfb6"
                    textAnchor="middle"
                  >
                    Mineral deposits & reserves
                  </text>

                  {/* Arrow Down */}
                  <line
                    x1="200"
                    y1="120"
                    x2="200"
                    y2="145"
                    stroke="#095d29"
                    strokeWidth="3"
                  />
                  <polygon points="200,150 195,140 205,140" fill="#095d29" />

                  {/* Step 2: Economic Viability */}
                  <rect
                    x="100"
                    y="150"
                    width="200"
                    height="60"
                    fill="#2d5a3d"
                    rx="8"
                  />
                  <text
                    x="200"
                    y="175"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Economic Viability
                  </text>
                  <text
                    x="200"
                    y="195"
                    fontSize="11"
                    fill="#c8bfb6"
                    textAnchor="middle"
                  >
                    Market analysis & ROI
                  </text>

                  {/* Arrow Down */}
                  <line
                    x1="200"
                    y1="210"
                    x2="200"
                    y2="235"
                    stroke="#095d29"
                    strokeWidth="3"
                  />
                  <polygon points="200,240 195,230 205,230" fill="#095d29" />

                  {/* Step 3: Regulatory Compliance */}
                  <rect
                    x="100"
                    y="240"
                    width="200"
                    height="60"
                    fill="#2d5a3d"
                    rx="8"
                  />
                  <text
                    x="200"
                    y="265"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Regulatory Compliance
                  </text>
                  <text
                    x="200"
                    y="285"
                    fontSize="11"
                    fill="#c8bfb6"
                    textAnchor="middle"
                  >
                    Environmental & legal
                  </text>

                  {/* Arrow Down */}
                  <line
                    x1="200"
                    y1="300"
                    x2="200"
                    y2="325"
                    stroke="#095d29"
                    strokeWidth="3"
                  />
                  <polygon points="200,330 195,320 205,320" fill="#095d29" />

                  {/* Step 4: Implementation Planning */}
                  <rect
                    x="100"
                    y="330"
                    width="200"
                    height="60"
                    fill="#095d29"
                    rx="8"
                  />
                  <text
                    x="200"
                    y="355"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Implementation Plan
                  </text>
                  <text
                    x="200"
                    y="375"
                    fontSize="11"
                    fill="#c8bfb6"
                    textAnchor="middle"
                  >
                    Timeline & resources
                  </text>

                  {/* Checkmark at bottom */}
                  <circle cx="200" cy="420" r="20" fill="#095d29" />
                  <path
                    d="M 190 420 L 197 427 L 210 410"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="py-8 md:py-10 section-green border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>
                Core Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feasibility Studies */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredService("feasibility")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Feasibility Studies
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "feasibility" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Comprehensive assessment of mineral deposits, extraction
                    viability, market conditions, and implementation
                    requirements. We prioritize realistic analysis over
                    optimistic projections.
                  </p>
                </div>
              </div>

              {/* Compliance & Regulatory Planning */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredService("compliance")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Compliance & Regulatory Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "compliance" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
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
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredService("valuechain")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Value-Chain Analysis
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "valuechain" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Assessment of extraction, processing, and market dynamics.
                    We identify opportunities for value addition and
                    institutional coordination across the supply chain.
                  </p>
                </div>
              </div>

              {/* Stakeholder Coordination */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredService("stakeholder")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Stakeholder Coordination
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "stakeholder" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Engagement with government bodies, policy institutions,
                    local stakeholders, and strategic partners. We facilitate
                    institutional alignment and long-term planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Geological Context */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">Pakistan's Geological Context</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-body mb-6">
                  Pakistan's geological diversity spans multiple tectonic zones,
                  creating significant mineral potential across Balochistan,
                  Khyber Pakhtunkhwa, and other regions. Understanding this
                  geological context is essential for feasibility assessment and
                  responsible resource development.
                </p>
                <p className="text-body">
                  Our work integrates geological data, tectonic analysis, and
                  regional mineral surveys to provide comprehensive assessment
                  of resource opportunities and extraction viability.
                </p>
              </div>
              <div className="card-institutional p-0 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/ODKAWHNBDLulEcgD.jpeg"
                  alt="Pakistan's Minerals Map showing distribution of copper, scandium, lead and zinc, chromite, marble and granite, and molybdenum across different regions"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technical Knowledge */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">
                Technical Knowledge and Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-body mb-6">
                  Our team brings together professionals with experience in
                  geological assessment, mining engineering, environmental
                  impact analysis, and institutional planning. We have worked on
                  projects across Pakistan's major mineral-bearing regions,
                  developing deep understanding of local geology, regulatory
                  requirements, and institutional dynamics.
                </p>
                <p className="text-body">
                  We combine technical rigor with institutional awareness,
                  ensuring that our recommendations are both analytically sound
                  and operationally feasible within Pakistan's policy and
                  governance frameworks.
                </p>
              </div>

              {/* Multidisciplinary Expertise Diagram */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Hub */}
                  <circle cx="200" cy="200" r="50" fill="#095d29" />
                  <text
                    x="200"
                    y="195"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Integrated
                  </text>
                  <text
                    x="200"
                    y="212"
                    fontSize="14"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Expertise
                  </text>

                  {/* Geological Assessment (Top) */}
                  <circle cx="200" cy="80" r="45" fill="#2d5a3d" />
                  <text
                    x="200"
                    y="78"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Geological
                  </text>
                  <text
                    x="200"
                    y="92"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Assessment
                  </text>
                  <line
                    x1="200"
                    y1="125"
                    x2="200"
                    y2="150"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Mining Engineering (Right) */}
                  <circle cx="320" cy="200" r="45" fill="#2d5a3d" />
                  <text
                    x="320"
                    y="198"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Mining
                  </text>
                  <text
                    x="320"
                    y="212"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Engineering
                  </text>
                  <line
                    x1="275"
                    y1="200"
                    x2="250"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Environmental Analysis (Bottom Right) */}
                  <circle cx="280" cy="310" r="45" fill="#2d5a3d" />
                  <text
                    x="280"
                    y="305"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Environmental
                  </text>
                  <text
                    x="280"
                    y="319"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Analysis
                  </text>
                  <line
                    x1="245"
                    y1="235"
                    x2="265"
                    y2="270"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Institutional Planning (Bottom Left) */}
                  <circle cx="120" cy="310" r="45" fill="#2d5a3d" />
                  <text
                    x="120"
                    y="305"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Institutional
                  </text>
                  <text
                    x="120"
                    y="319"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Planning
                  </text>
                  <line
                    x1="155"
                    y1="235"
                    x2="135"
                    y2="270"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Regulatory Compliance (Left) */}
                  <circle cx="80" cy="200" r="45" fill="#2d5a3d" />
                  <text
                    x="80"
                    y="198"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Regulatory
                  </text>
                  <text
                    x="80"
                    y="212"
                    fontSize="12"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Compliance
                  </text>
                  <line
                    x1="125"
                    y1="200"
                    x2="150"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-10 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
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
  );
}
