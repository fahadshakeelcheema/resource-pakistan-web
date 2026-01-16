import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * About Us Page - Minimalist Institutional Design
 * Company purpose, values, expertise, and governance
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              About Resource Pakistan
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A multidisciplinary company founded to support Pakistan's resource and industrial development through rigorous planning, institutional alignment, and responsible execution.
            </p>
          </div>
        </section>

        {/* Section 1: Mission and Scope */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>Mission and Scope
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Resource Pakistan operates at the interface between resource development, policy frameworks, and industrial strategy. We provide advisory, analytical, and planning services to government bodies, institutional stakeholders, and strategic partners seeking to advance feasibility-driven projects across mining, consultancy, electric vehicles, and industrial technology sectors.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Our work is grounded in the principle that sustainable resource and industrial development requires rigorous feasibility assessment, institutional alignment, and long-term commitment. We reject transactional approaches in favor of structured, evidence-based planning that serves Pakistan's long-term economic interests.
            </p>
          </div>
        </section>

        {/* Section 2: Core Principles */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Institutional Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate with transparency and accountability, understanding that our work informs institutional decision-making. Every recommendation is grounded in rigorous analysis and documented evidence.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Feasibility First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize realistic assessment over optimistic projections. Our role is to provide decision-makers with clear understanding of opportunities, constraints, and implementation requirements.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Responsible Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resource and industrial development must integrate environmental stewardship, socio-economic considerations, and compliance. We embed these principles into every engagement.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Multidisciplinary Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complex challenges require diverse expertise. We bring together specialists across mining, consultancy, technology, and industrial planning.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Long-Term Perspective</h3>
              <p className="text-muted-foreground leading-relaxed">
                We view our engagements as contributions to Pakistan's long-term development trajectory, not short-term transactions. This perspective shapes our recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Expertise and Experience */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Expertise and Experience
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Our team comprises professionals with extensive experience in resource development, institutional planning, technology assessment, and strategic advisory. We have worked across government bodies, policy institutions, and private sector organizations, developing deep understanding of Pakistan's institutional landscape and sectoral dynamics.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Our expertise spans feasibility study methodology, environmental and social impact assessment, technology evaluation, industrial policy analysis, and stakeholder coordination. We combine technical rigor with institutional awareness to deliver recommendations that are both analytically sound and operationally feasible.
            </p>
          </div>
        </section>

        {/* Section 4: Ethics, Compliance, and Confidentiality */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">4.</span>Ethics, Compliance, and Confidentiality
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Resource Pakistan operates under strict ethical and compliance standards. We maintain confidentiality regarding all client information, project details, and strategic discussions. Our work is structured to support institutional decision-making processes while respecting the sensitive nature of resource development and policy planning.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              We are committed to responsible resource development that integrates environmental protection, community considerations, and long-term sustainability. All our recommendations are subject to institutional review and are designed to withstand scrutiny from government bodies, policy analysts, and stakeholder groups.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Our engagement framework prioritizes transparency, documented analysis, and clear communication of assumptions, limitations, and recommendations. We understand that our work may inform public policy and institutional decisions, and we structure our deliverables accordingly.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
