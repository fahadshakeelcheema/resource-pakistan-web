import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page - Refined Institutional Design
 * Enhanced visual hierarchy, section rhythm, contemporary typography
 * Abstract imagery for institutional credibility
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Abstract Background */}
        <section className="relative overflow-hidden py-24 md:py-40 border-b border-border">
          <div 
            className="absolute inset-0 opacity-[0.08] grayscale"
            style={{backgroundImage: 'url(/images/pakistan-balochistan-mountains.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6">
                Building Pakistan's Resource and Industrial Future
              </h1>
              <p className="text-subheading mb-8">
                Strategic development across mining, consultancy, electric vehicles, and industrial technology.
              </p>
              <p className="text-body mb-12 max-w-2xl">
                Resource Pakistan (Pvt) Ltd operates at the intersection of resource development, policy alignment, and long-term industrial planning. We work with government bodies, institutional stakeholders, and strategic partners to advance feasibility-driven projects that create sustainable value for Pakistan's economy.
              </p>
              <Link href="/about">
                <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Core Verticals */}
        <section className="py-20 md:py-28 section-accent">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Core Verticals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mining & Resources */}
              <div className="card-institutional">
                <h3 className="text-xl font-bold text-foreground mb-4">Mining & Resources</h3>
                <p className="text-body text-muted-foreground">
                  Responsible mineral development through comprehensive feasibility studies, compliance-oriented planning, and value-chain analysis. We approach resource extraction as a long-term institutional commitment.
                </p>
              </div>

              {/* Consultancy & Advisory */}
              <div className="card-institutional">
                <h3 className="text-xl font-bold text-foreground mb-4">Consultancy & Advisory</h3>
                <p className="text-body text-muted-foreground">
                  Strategic planning and advisory services for government bodies, think tanks, and institutional stakeholders. We bridge policy frameworks with operational execution.
                </p>
              </div>

              {/* Electric Vehicles & Technology */}
              <div className="card-institutional">
                <h3 className="text-xl font-bold text-foreground mb-4">Electric Vehicles & Technology</h3>
                <p className="text-body text-muted-foreground">
                  Research-focused initiatives in electric mobility and emerging industrial technologies. Our approach emphasizes pilot programs and long-term institutional planning.
                </p>
              </div>

              {/* Industrial Planning */}
              <div className="card-institutional">
                <h3 className="text-xl font-bold text-foreground mb-4">Industrial Planning</h3>
                <p className="text-body text-muted-foreground">
                  Multidisciplinary coordination across sectors, stakeholder engagement, and feasibility assessment. We support institutional planning with rigorous analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="py-20 md:py-28 section-light border-t border-border relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-3"
            style={{backgroundImage: 'url(/images/abstract-data-visualization.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          ></div>
          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">2.</span>Our Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feasibility-Driven Planning */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Feasibility-Driven Planning</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Every project begins with comprehensive feasibility assessment. We prioritize rigorous analysis over optimistic projections, ensuring recommendations withstand institutional scrutiny.
                </p>
              </div>

              {/* Institutional Alignment */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Institutional Alignment</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  We understand the complexity of working across government, policy, and private sectors. Our work is structured to support institutional decision-making processes.
                </p>
              </div>

              {/* Responsible Development */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Responsible Development</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Resource development must balance economic opportunity with environmental and socio-economic considerations. We integrate compliance and sustainability into every engagement.
                </p>
              </div>

              {/* Multidisciplinary Expertise */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Multidisciplinary Expertise</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Mining, consultancy, technology, and industrial planning require diverse expertise. Our team brings together specialists across these domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Sectors */}
        <section className="py-20 md:py-28 section-accent border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Strategic Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Government Bodies & Policy Institutions */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Government Bodies & Policy Institutions</h3>
                <p className="text-body text-muted-foreground">
                  Advisory services, feasibility studies, and strategic planning support for institutional decision-making.
                </p>
              </div>

              {/* Investors & Strategic Partners */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Investors & Strategic Partners</h3>
                <p className="text-body text-muted-foreground">
                  Comprehensive due diligence, market assessment, and project evaluation for resource and industrial opportunities.
                </p>
              </div>

              {/* Industrial & Technology Sectors */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Industrial & Technology Sectors</h3>
                <p className="text-body text-muted-foreground">
                  Research support, technology assessment, and long-term planning for emerging industrial initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For inquiries regarding feasibility studies, advisory services, or strategic partnerships, please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
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
