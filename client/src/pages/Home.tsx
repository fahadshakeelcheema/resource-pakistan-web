import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page - Minimalist Institutional Design
 * Hero section, focus areas, approach, and sectors
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Building Pakistan's Resource and Industrial Future
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Strategic development across mining, consultancy, electric vehicles, and industrial technology.
            </p>
            <p className="text-base text-foreground leading-relaxed mb-8">
              Resource Pakistan (Pvt) Ltd operates at the intersection of resource development, policy alignment, and long-term industrial planning. We work with government bodies, institutional stakeholders, and strategic partners to advance feasibility-driven projects that create sustainable value for Pakistan's economy.
            </p>
            <Link href="/about">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg">
                Learn More
              </a>
            </Link>
          </div>
        </section>

        {/* Section 1: Core Verticals */}
        <section className="container py-20 md:py-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>Core Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mining & Resources */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Mining & Resources</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responsible mineral development through comprehensive feasibility studies, compliance-oriented planning, and value-chain analysis. We approach resource extraction as a long-term institutional commitment.
              </p>
            </div>

            {/* Consultancy & Advisory */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Consultancy & Advisory</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic planning and advisory services for government bodies, think tanks, and institutional stakeholders. We bridge policy frameworks with operational execution.
              </p>
            </div>

            {/* Electric Vehicles & Technology */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Electric Vehicles & Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Research-focused initiatives in electric mobility and emerging industrial technologies. Our approach emphasizes pilot programs and long-term institutional planning.
              </p>
            </div>

            {/* Industrial Planning */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Industrial Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multidisciplinary coordination across sectors, stakeholder engagement, and feasibility assessment. We support institutional planning with rigorous analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Feasibility-Driven Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project begins with comprehensive feasibility assessment. We prioritize rigorous analysis over optimistic projections, ensuring recommendations withstand institutional scrutiny.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Institutional Alignment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the complexity of working across government, policy, and private sectors. Our work is structured to support institutional decision-making processes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Responsible Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resource development must balance economic opportunity with environmental and socio-economic considerations. We integrate compliance and sustainability into every engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Multidisciplinary Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mining, consultancy, technology, and industrial planning require diverse expertise. Our team brings together specialists across these domains.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Sectors */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Strategic Sectors
            </h2>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Government Bodies & Policy Institutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advisory services, feasibility studies, and strategic planning support for institutional decision-making.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Investors & Strategic Partners</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive due diligence, market assessment, and project evaluation for resource and industrial opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Industrial & Technology Sectors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Research support, technology assessment, and long-term planning for emerging industrial initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="max-w-2xl">
            <p className="text-lg text-foreground mb-8">
              For inquiries regarding feasibility studies, advisory services, or strategic partnerships, please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg">
                Submit Inquiry
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
