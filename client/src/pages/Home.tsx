import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig, organizationSchema } from "@/lib/seo-config";

/**
 * Home Page - Compact Institutional Design
 * Hero section fits without scrolling, compact spacing throughout
 */
export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <>
      <SEO metadata={seoConfig.home} jsonLd={organizationSchema} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[]} />

      <main className="flex-1">
        {/* Compact Hero Section - Fits Without Scrolling */}
        <section className="relative overflow-hidden h-[calc(100vh-80px)] flex items-center border-b border-border">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/HjuvozCNZQjtDKdL.jpg)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Building Pakistan's Resource and Industrial Future
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-3 font-light">
                Strategic development across consultancy, mining, electric vehicles, and industrial technology.
              </p>
              <p className="text-base text-gray-200 mb-5 max-w-2xl leading-relaxed">
                Resource Pakistan (Pvt) Ltd operates at the intersection of resource development, policy alignment, and long-term industrial planning.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-white text-slate-900 font-semibold transition-all hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Core Verticals - Compact */}
        <section className="py-8 md:py-10 section-cream">
          <div className="container">
            <div className="mb-5 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Core Verticals
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Multidisciplinary expertise across mining, consultancy, technology, and industrial planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Consultancy & Advisory */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("consultancy")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-consultancy.jpg"
                    alt="Consultancy & Advisory"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Consultancy & Advisory
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "consultancy" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic planning and advisory services for government bodies and institutional stakeholders.
                  </p>
                </div>
              </div>

              {/* Mining & Resources */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("mining")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-mining.jpg"
                    alt="Mining & Resources"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Mining & Resources
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "mining" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Responsible mineral development through comprehensive feasibility studies and compliance-oriented planning.
                  </p>
                </div>
              </div>

              {/* Electric Vehicles & Technology */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("ev")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-ev-technology.jpg"
                    alt="Electric Vehicles & Technology"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Electric Vehicles & Technology
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "ev" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Research-focused initiatives in electric mobility and emerging industrial technologies.
                  </p>
                </div>
              </div>

              {/* Industrial Planning */}
              <div
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredService("industrial")}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img
                    loading="lazy"
                    src="/images/service-industrial-planning.jpg"
                    alt="Industrial Planning"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Industrial Planning
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredService === "industrial" ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multidisciplinary coordination across sectors with rigorous feasibility assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Inquiry Section - Compact */}
        <section className="py-10 md:py-12 section-green border-t border-white/20">
          <div className="container text-center">
            <p
              className="text-base mb-5 max-w-2xl mx-auto"
              style={{ color: "#f2f2f2" }}
            >
              For inquiries regarding feasibility studies, advisory services, or strategic partnerships, please contact us.
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
