import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Governance Page - Refined Institutional Design
 * Ethics, compliance, responsibility, stakeholder coordination
 */
export default function Governance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">Governance & Responsibility</h1>
            <p className="text-subheading">
              Ethics, compliance, and responsible resource development aligned with institutional standards.
            </p>
          </div>
        </section>

        {/* Section 1: Governance Framework */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Governance Framework
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Resource Pakistan operates under strict ethical, compliance, and governance standards. Our work is structured to support institutional decision-making while maintaining confidentiality, transparency, and accountability. We understand that our recommendations may inform policy and institutional decisions, and we structure our engagement accordingly.
              </p>
              <p className="text-body">
                We are committed to responsible resource and industrial development that integrates environmental protection, socio-economic considerations, and long-term sustainability. All our work is subject to institutional review and designed to withstand scrutiny from government bodies, policy analysts, and stakeholder groups.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Ethical Principles */}
        <section className="py-20 md:py-28 section-light border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">2.</span>Ethical Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Integrity and Transparency */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Integrity and Transparency</h3>
                <p className="text-body text-muted-foreground">
                  We operate with transparency and accountability, documenting all analysis and recommendations. Our engagement framework prioritizes clear communication of assumptions, limitations, and evidence-based conclusions.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Confidentiality</h3>
                <p className="text-body text-muted-foreground">
                  We maintain strict confidentiality regarding all client information, project details, and strategic discussions. Our work respects the sensitive nature of resource development and policy planning.
                </p>
              </div>

              {/* Responsible Development */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Responsible Development</h3>
                <p className="text-body text-muted-foreground">
                  Resource and industrial development must integrate environmental stewardship, community considerations, and long-term sustainability. We embed these principles into every engagement.
                </p>
              </div>

              {/* Institutional Alignment */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Institutional Alignment</h3>
                <p className="text-body text-muted-foreground">
                  Our work is structured to support institutional decision-making processes and align with Pakistan's governance frameworks, policy objectives, and long-term development priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Compliance and Standards */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Compliance and Standards
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Resource Pakistan operates in compliance with Pakistan's regulatory frameworks, environmental standards, and institutional requirements. All our recommendations are designed to support compliance and withstand institutional review. We maintain awareness of evolving policy frameworks and adjust our advisory services accordingly.
              </p>
              <p className="text-body">
                Our engagement methodology integrates compliance requirements from the outset, ensuring that all recommendations are feasible within Pakistan's institutional and regulatory context. We support clients in understanding compliance requirements and developing implementation strategies aligned with institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Stakeholder Coordination */}
        <section className="py-20 md:py-28 section-light border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">4.</span>Stakeholder Coordination
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Resource development and industrial planning require coordination across multiple stakeholder groups including government bodies, policy institutions, local communities, and strategic partners. We facilitate structured engagement processes and support alignment across institutional levels and sectoral interests.
              </p>
              <p className="text-body">
                Our stakeholder coordination approach prioritizes transparency, documented communication, and institutional alignment. We help decision-makers navigate complex multi-stakeholder environments and develop consensus around feasibility-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For questions regarding our governance framework, compliance standards, or ethical principles, please contact us.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                Get in Touch
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
