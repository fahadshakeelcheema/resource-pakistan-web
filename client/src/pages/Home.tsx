import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig, organizationSchema } from "@/lib/seo-config";

/**
 * Home Page - Refined Institutional Design
 * Enhanced visual hierarchy, section rhythm, contemporary typography
 * Abstract imagery for institutional credibility
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  // State for hover sections
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredApproach, setHoveredApproach] = useState<string | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  return (
    <>
      <SEO metadata={seoConfig.home} jsonLd={organizationSchema} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[]} />

      <main className="flex-1">
        {/* Full-Screen Hero Section with Background Image */}
        <section className="relative overflow-hidden min-h-[85vh] flex items-center border-b border-border">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/HjuvozCNZQjtDKdL.jpg)",
            }}
          ></div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>

          {/* Content */}
          <div className="container relative z-10 py-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Building Pakistan's Resource and Industrial Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-6 font-light">
                Strategic development across mining, consultancy, electric
                vehicles, and industrial technology.
              </p>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
                Resource Pakistan (Pvt) Ltd operates at the intersection of
                resource development, policy alignment, and long-term industrial
                planning. We work with government bodies, institutional
                stakeholders, and strategic partners to advance
                feasibility-driven projects that create sustainable value for
                Pakistan's economy.
              </p>
              <Link
                href="/about"
                className="inline-block px-10 py-4 bg-white text-slate-900 font-semibold text-lg transition-all hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Core Verticals - Circular Service Icons */}
        <section className="py-12 md:py-16 section-cream">
          <div className="container">
            <div className="mb-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Core Verticals
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Multidisciplinary expertise across mining, consultancy,
                technology, and industrial planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
              {/* Consultancy & Advisory */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("consultancy")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-consultancy.jpg"
                    alt="Consultancy & Advisory"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Consultancy & Advisory
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "consultancy" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic planning and advisory services for government
                    bodies and institutional stakeholders.
                  </p>
                </div>
              </div>

              {/* Mining & Resources */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("mining")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-mining.jpg"
                    alt="Mining & Resources"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Mining & Resources
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "mining" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Responsible mineral development through comprehensive
                    feasibility studies and compliance-oriented planning.
                  </p>
                </div>
              </div>

              {/* Electric Vehicles & Technology */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("ev")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-ev-technology.jpg"
                    alt="Electric Vehicles & Technology"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Electric Vehicles & Technology
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "ev" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Research-focused initiatives in electric mobility and
                    emerging industrial technologies.
                  </p>
                </div>
              </div>

              {/* Industrial Planning */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("industrial")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-industrial-planning.jpg"
                    alt="Industrial Planning"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Industrial Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "industrial" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multidisciplinary coordination across sectors with rigorous
                    feasibility assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="py-12 md:py-16 section-green border-t border-white/20">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>
                Our Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feasibility-Driven Planning */}
              <div
                className="p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredApproach("feasibility")}
                onMouseLeave={() => setHoveredApproach(null)}
                style={{ backgroundColor: "#095d29", borderStyle: "none" }}
              >
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ color: "#ffffff" }}
                >
                  Feasibility-Driven Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredApproach === "feasibility" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground leading-relaxed"
                    style={{ color: "#c8bfb6" }}
                  >
                    Every project begins with comprehensive feasibility
                    assessment. We prioritize rigorous analysis over optimistic
                    projections, ensuring recommendations withstand
                    institutional scrutiny.
                  </p>
                </div>
              </div>

              {/* Institutional Alignment */}
              <div
                className="p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredApproach("institutional")}
                onMouseLeave={() => setHoveredApproach(null)}
                style={{ backgroundColor: "#095d29", borderStyle: "none" }}
              >
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ color: "#fafafa" }}
                >
                  Institutional Alignment
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredApproach === "institutional" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground leading-relaxed"
                    style={{ color: "#c8bfb6" }}
                  >
                    We understand the complexity of working across government,
                    policy, and private sectors. Our work is structured to
                    support institutional decision-making processes.
                  </p>
                </div>
              </div>

              {/* Responsible Development */}
              <div
                className="p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredApproach("responsible")}
                onMouseLeave={() => setHoveredApproach(null)}
                style={{ backgroundColor: "#095d29", borderStyle: "none" }}
              >
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ color: "#f5f5f4" }}
                >
                  Responsible Development
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredApproach === "responsible" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground leading-relaxed"
                    style={{ color: "#c8bfb6" }}
                  >
                    Resource development must balance economic opportunity with
                    environmental and socio-economic considerations. We
                    integrate compliance and sustainability into every
                    engagement.
                  </p>
                </div>
              </div>

              {/* Multidisciplinary Expertise */}
              <div
                className="p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredApproach("multidisciplinary")}
                onMouseLeave={() => setHoveredApproach(null)}
                style={{ backgroundColor: "#095d29", borderStyle: "none" }}
              >
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ color: "#fafafa" }}
                >
                  Multidisciplinary Expertise
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredApproach === "multidisciplinary" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground leading-relaxed"
                    style={{ color: "#c8bfb6" }}
                  >
                    Mining, consultancy, technology, and industrial planning
                    require diverse expertise. Our team brings together
                    specialists across these domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Sectors */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">Strategic Sectors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Government Bodies & Policy Institutions */}
              <div
                className="p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredSector("government")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Government Bodies & Policy Institutions
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "government" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
                    Advisory services, feasibility studies, and strategic
                    planning support for institutional decision-making.
                  </p>
                </div>
              </div>

              {/* Investors & Strategic Partners */}
              <div
                className="p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredSector("investors")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Investors & Strategic Partners
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "investors" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
                    Comprehensive due diligence, market assessment, and project
                    evaluation for resource and industrial opportunities.
                  </p>
                </div>
              </div>

              {/* Industrial & Technology Sectors */}
              <div
                className="p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onMouseEnter={() => setHoveredSector("industrial")}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Industrial & Technology Sectors
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredSector === "industrial" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-body text-muted-foreground">
                    Research support, technology assessment, and long-term
                    planning for emerging industrial initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 section-green border-t border-white/20">
          <div className="container text-center">
            <p
              className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
              style={{ color: "#f2f2f2" }}
            >
              For inquiries regarding feasibility studies, advisory services, or
              strategic partnerships, please contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-green-primary font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Inquiry
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
