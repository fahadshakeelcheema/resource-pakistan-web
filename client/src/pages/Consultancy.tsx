import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Consultancy Page - Refined Institutional Design
 * Advisory services, feasibility planning, stakeholder coordination
 */
export default function Consultancy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">Consultancy & Advisory Services</h1>
            <p className="text-subheading">
              Strategic planning and advisory services for government bodies, policy institutions, and strategic partners.
            </p>
          </div>
        </section>

        {/* Section 1: Our Consultancy Approach */}
        <section className="py-20 md:py-28 section-accent border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Consultancy Approach
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Resource Pakistan provides advisory services that bridge policy frameworks with operational execution. We work with government bodies, think tanks, and institutional stakeholders to develop feasibility-driven strategies for resource development, industrial planning, and technology assessment.
              </p>
              <p className="text-body">
                Our consultancy is grounded in rigorous analysis, institutional understanding, and long-term perspective. We structure recommendations to support institutional decision-making processes and withstand scrutiny from policy analysts and stakeholder groups.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Consultancy Services */}
        <section className="py-20 md:py-28 section-light border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">2.</span>Core Consultancy Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Strategic Planning */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Strategic Planning</h3>
                <p className="text-body text-muted-foreground">
                  Long-term planning for resource development, industrial strategy, and technology initiatives. We support institutional decision-making with comprehensive analysis and feasibility assessment.
                </p>
              </div>

              {/* Policy Analysis */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Policy Analysis</h3>
                <p className="text-body text-muted-foreground">
                  Assessment of policy frameworks, regulatory requirements, and institutional alignment. We help identify opportunities and constraints within Pakistan's governance structures.
                </p>
              </div>

              {/* Feasibility Assessment */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Feasibility Assessment</h3>
                <p className="text-body text-muted-foreground">
                  Comprehensive evaluation of proposed initiatives across mining, technology, industrial planning, and development sectors. We prioritize realistic assessment and clear communication of constraints.
                </p>
              </div>

              {/* Stakeholder Engagement */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Stakeholder Engagement</h3>
                <p className="text-body text-muted-foreground">
                  Coordination across government bodies, policy institutions, private sector, and strategic partners. We facilitate institutional alignment and long-term planning processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Client Sectors */}
        <section className="py-20 md:py-28 section-accent border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Client Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Government Bodies */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Government Bodies</h3>
                <p className="text-body text-muted-foreground">
                  Advisory services for ministries, agencies, and policy institutions. We support institutional planning and strategic decision-making.
                </p>
              </div>

              {/* Think Tanks & Institutions */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Think Tanks & Institutions</h3>
                <p className="text-body text-muted-foreground">
                  Research support, policy analysis, and feasibility assessment for institutional research and planning initiatives.
                </p>
              </div>

              {/* Strategic Partners */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Strategic Partners</h3>
                <p className="text-body text-muted-foreground">
                  Advisory services for investors, development organizations, and strategic partners seeking to understand Pakistan's resource and industrial landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For consultancy services, strategic planning, or advisory support, please contact us.
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
  );
}
