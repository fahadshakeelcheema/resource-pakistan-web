import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Governance Page - Minimalist Institutional Design
 * Ethics, compliance, environmental responsibility, stakeholder engagement
 */
export default function Governance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Governance, Ethics & Responsibility
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to institutional integrity, environmental stewardship, and responsible development.
            </p>
          </div>
        </section>

        {/* Section 1: Core Commitments */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Institutional Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate with transparency and accountability in all engagements. Our work is grounded in rigorous analysis and documented evidence, recognizing that our recommendations inform institutional decision-making.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Confidentiality and Information Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                All client information, project details, and strategic discussions are maintained under strict confidentiality protocols. We understand the sensitive nature of resource development and policy planning work.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Compliance and Legal Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate in full compliance with applicable laws, regulations, and institutional frameworks. Our work integrates compliance requirements into all recommendations and deliverables.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Responsible Resource Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resource extraction must integrate environmental protection, community considerations, and long-term sustainability. We embed these principles into every resource development engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Sustainable Development Integration */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Sustainable Development Integration
            </h2>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Environmental Stewardship</h3>
              <p className="text-muted-foreground leading-relaxed">
                We integrate environmental protection into all resource development planning. Our assessments include comprehensive environmental impact analysis and mitigation strategies.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Community and Socio-Economic Considerations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resource development affects local communities and broader socio-economic dynamics. We support clients in developing approaches that balance resource opportunity with community and social considerations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Long-Term Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We view resource development as a long-term institutional commitment, not a short-term extraction opportunity. Our recommendations prioritize sustainable value creation over immediate returns.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Stakeholder Coordination */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Multi-Stakeholder Coordination
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              Responsible resource and industrial development requires coordination across government bodies, environmental authorities, community groups, and other stakeholders. We support structured engagement processes that ensure all perspectives are considered and institutional alignment is achieved.
            </p>
          </div>
        </section>

        {/* Section 4: Governance Standards */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">4.</span>Governance Standards
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              We maintain transparent processes and clear communication with all stakeholders. Our recommendations are documented with clear explanation of analysis, assumptions, limitations, and conclusions.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              We recognize that our work may inform public policy and institutional decisions. We structure our engagement and deliverables accordingly, ensuring that analysis is rigorous, recommendations are well-founded, and institutional decision-makers have clear understanding of implications and constraints.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
