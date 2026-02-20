import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * Technology Page - Compact Institutional Design
 * Electric vehicles, emerging technologies, research-focused initiatives
 */
export default function Technology() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <>
      <SEO metadata={seoConfig.evs} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "EVs & Technology" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/NjZVMBMINiJroMqG.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-4 text-white drop-shadow-lg">
                Electric Vehicles & Emerging Technologies
              </h1>
              <p className="text-subheading text-white/90 font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                Research-focused initiatives in electric mobility and emerging
                industrial technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Technology Strategy - Compressed */}
        <section className="py-6 md:py-8 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center mb-4">
              Technology Strategy and Assessment
            </h2>
            <p className="text-body text-center max-w-3xl mx-auto mb-3">
              Electric vehicles and emerging industrial technologies
              represent significant opportunities for Pakistan's long-term
              development. Resource Pakistan provides research-focused
              advisory services supporting institutional assessment of
              technology opportunities, pilot programs, and long-term
              integration strategies.
            </p>
            <p className="text-body text-center max-w-3xl mx-auto">
              Our approach emphasizes feasibility assessment, institutional
              alignment, and realistic evaluation of implementation
              requirements. We support government bodies and strategic
              partners in understanding technology adoption pathways and
              long-term institutional planning.
            </p>
          </div>
        </section>

        {/* Section 2: Focus Areas */}
        <section className="py-6 md:py-8 section-green border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center mb-4" style={{ color: "#ffffff" }}>
              Focus Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Electric Mobility */}
              <div
                className="card-institutional transition-all hover:shadow-lg p-4"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredArea("mobility")}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Electric Mobility
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === "mobility" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Assessment of electric vehicle adoption, charging
                    infrastructure, supply chain development, and policy
                    frameworks for Pakistan's electric mobility transition.
                  </p>
                </div>
              </div>

              {/* Technology Pilot Programs */}
              <div
                className="card-institutional transition-all hover:shadow-lg p-4"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredArea("pilot")}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Technology Pilot Programs
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === "pilot" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Research support and feasibility assessment for pilot
                    initiatives in emerging technologies, including implementation
                    requirements and scalability pathways.
                  </p>
                </div>
              </div>

              {/* Industrial Technology Integration */}
              <div
                className="card-institutional transition-all hover:shadow-lg p-4"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredArea("industrial")}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Industrial Technology Integration
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === "industrial" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Assessment of technology adoption in industrial sectors,
                    supply chain optimization, and productivity enhancement
                    for long-term competitiveness.
                  </p>
                </div>
              </div>

              {/* Research and Analysis */}
              <div
                className="card-institutional transition-all hover:shadow-lg p-4"
                style={{ backgroundColor: "#1e3a5f" }}
                onMouseEnter={() => setHoveredArea("research")}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                  Research and Analysis
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === "research" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-body" style={{ color: "#c8bfb6" }}>
                    Market research, technology benchmarking, and comparative
                    analysis supporting institutional decision-making regarding
                    technology adoption and investment priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Long-Term Institutional Planning - No SVG */}
        <section className="py-6 md:py-8 section-cream border-t border-border">
          <div className="container">
            <h2 className="text-heading text-center mb-4">Long-Term Institutional Planning</h2>
            <p className="text-body text-center max-w-3xl mx-auto mb-3">
              Our technology work is framed within long-term institutional
              planning horizons. We support government bodies and strategic
              partners in developing comprehensive strategies that integrate
              technology adoption with industrial development, resource
              management, and policy frameworks.
            </p>
            <p className="text-body text-center max-w-3xl mx-auto mb-6">
              We emphasize realistic assessment of implementation timelines,
              institutional capacity requirements, and resource commitments.
              Our recommendations are structured to support evidence-based
              institutional decision-making and long-term strategic planning.
            </p>

            {/* Compact Linear Timeline */}
            <div className="flex items-center justify-center gap-2 md:gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold">1</div>
                <span className="text-xs text-[#2d5a8c] font-semibold mt-1">Assessment</span>
              </div>
              <div className="flex-1 h-0.5 bg-[#2d5a8c]"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold">2</div>
                <span className="text-xs text-[#2d5a8c] font-semibold mt-1">Strategy</span>
              </div>
              <div className="flex-1 h-0.5 bg-[#2d5a8c]"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold">3</div>
                <span className="text-xs text-[#2d5a8c] font-semibold mt-1">Integration</span>
              </div>
              <div className="flex-1 h-0.5 bg-[#2d5a8c]"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold">4</div>
                <span className="text-xs text-[#2d5a8c] font-semibold mt-1">Implementation</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 md:py-8 section-green border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-white mb-4 max-w-2xl mx-auto">
              For technology assessment, research support, or strategic planning
              in electric vehicles and emerging technologies, please contact us.
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
