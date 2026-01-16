import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * EVs & Technology Page - Minimalist Institutional Design
 * Electric mobility, technology assessment, long-term planning
 */
export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Electric Vehicles & Emerging Technologies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Research-focused initiatives in electric mobility and industrial technology integration.
            </p>
          </div>
        </section>

        {/* Section 1: EV and Technology Initiatives */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>EV and Technology Initiatives
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              Electric vehicles and emerging industrial technologies represent significant opportunities for Pakistan's long-term industrial development. Resource Pakistan supports government bodies and strategic partners in assessing technology opportunities, planning integration strategies, and developing implementation pathways.
            </p>
            <p className="text-base text-foreground leading-relaxed mt-6">
              Our approach emphasizes research, pilot programs, and long-term institutional planning rather than immediate commercialization. We support decision-makers in understanding technology potential, institutional requirements, and long-term development implications.
            </p>
          </div>
        </section>

        {/* Section 2: Technology Assessment and Planning */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Technology Assessment and Planning
            </h2>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Electric Mobility Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                Assessment of electric vehicle technology, market dynamics, and integration opportunities for Pakistan. We evaluate technology options, infrastructure requirements, and policy frameworks supporting EV adoption.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Industrial Technology Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Evaluation of emerging technologies applicable to Pakistan's industrial sectors. We assess technology potential, institutional requirements, and long-term competitive implications.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Infrastructure and Ecosystem Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support for institutional planning regarding technology infrastructure, supply chains, and ecosystem development. We help decision-makers understand requirements for successful technology integration.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Policy and Regulatory Framework Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advisory services supporting government bodies in developing policy and regulatory frameworks for technology adoption. We assess international best practices and adapt recommendations to Pakistan's institutional context.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Research and Pilot Program Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support for research initiatives and pilot programs testing technology applications. We help structure research programs and evaluate results for policy implications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Outlook */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Strategic Outlook
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Technology adoption requires long-term institutional commitment and strategic planning. We support government bodies and strategic partners in developing comprehensive technology strategies aligned with Pakistan's industrial development objectives.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Our work emphasizes the institutional and policy dimensions of technology adoption, not just technical feasibility. We help decision-makers understand the broader implications of technology integration for Pakistan's economy, employment, and industrial structure.
            </p>
          </div>
        </section>

        {/* Section 4: Research-Focused Methodology */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">4.</span>Research-Focused Methodology
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              We approach technology assessment with rigorous research methodology, international best practice analysis, and institutional awareness. Our recommendations are grounded in evidence and structured to support institutional decision-making regarding technology adoption and long-term industrial strategy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
