import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Mining Page - Refined Institutional Design
 * Responsible mineral development, feasibility studies, compliance
 */
export default function Mining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">Mining & Resource Development</h1>
            <p className="text-subheading">
              Responsible mineral development through comprehensive feasibility assessment and institutional alignment.
            </p>
          </div>
        </section>

        {/* Section 1: Our Approach to Mining */}
        <section className="py-20 md:py-28 section-accent border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Feasibility-Driven Resource Development
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Mining and resource extraction require rigorous feasibility assessment, compliance planning, and long-term value-chain analysis. Resource Pakistan provides comprehensive advisory services covering geological assessment, economic viability, regulatory compliance, and implementation planning.
              </p>
              <p className="text-body">
                Our approach integrates technical analysis with institutional requirements, ensuring that resource development projects are both economically sound and aligned with Pakistan's policy frameworks and environmental standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="py-20 md:py-28 section-light border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">2.</span>Core Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feasibility Studies */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Feasibility Studies</h3>
                <p className="text-body text-muted-foreground">
                  Comprehensive assessment of mineral deposits, extraction viability, market conditions, and implementation requirements. We prioritize realistic analysis over optimistic projections.
                </p>
              </div>

              {/* Compliance & Regulatory Planning */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Compliance & Regulatory Planning</h3>
                <p className="text-body text-muted-foreground">
                  Navigation of Pakistan's regulatory frameworks, environmental standards, and institutional requirements. We ensure projects are structured for institutional approval and long-term sustainability.
                </p>
              </div>

              {/* Value-Chain Analysis */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Value-Chain Analysis</h3>
                <p className="text-body text-muted-foreground">
                  Assessment of extraction, processing, and market dynamics. We identify opportunities for value addition and institutional coordination across the supply chain.
                </p>
              </div>

              {/* Stakeholder Coordination */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Stakeholder Coordination</h3>
                <p className="text-body text-muted-foreground">
                  Engagement with government bodies, policy institutions, local stakeholders, and strategic partners. We facilitate institutional alignment and long-term planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Knowledge */}
        <section className="py-20 md:py-28 section-accent border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Technical Knowledge and Expertise
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Our team brings together professionals with experience in geological assessment, mining engineering, environmental impact analysis, and institutional planning. We have worked on projects across Pakistan's major mineral-bearing regions, developing deep understanding of local geology, regulatory requirements, and institutional dynamics.
              </p>
              <p className="text-body">
                We combine technical rigor with institutional awareness, ensuring that our recommendations are both analytically sound and operationally feasible within Pakistan's policy and governance frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For mining feasibility studies, compliance planning, or resource development advisory, please contact us.
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
