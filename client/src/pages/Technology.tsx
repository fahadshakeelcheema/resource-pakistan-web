import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Technology Page - Refined Institutional Design
 * Electric vehicles, emerging technologies, research-focused initiatives
 */
export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">Electric Vehicles & Emerging Technologies</h1>
            <p className="text-subheading">
              Research-focused initiatives in electric mobility and emerging industrial technologies.
            </p>
          </div>
        </section>

        {/* Section 1: Technology Strategy */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Technology Strategy and Assessment
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Electric vehicles and emerging industrial technologies represent significant opportunities for Pakistan's long-term development. Resource Pakistan provides research-focused advisory services supporting institutional assessment of technology opportunities, pilot programs, and long-term integration strategies.
              </p>
              <p className="text-body">
                Our approach emphasizes feasibility assessment, institutional alignment, and realistic evaluation of implementation requirements. We support government bodies and strategic partners in understanding technology adoption pathways and long-term institutional planning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Focus Areas */}
        <section className="py-20 md:py-28 section-light border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">2.</span>Focus Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Electric Mobility */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Electric Mobility</h3>
                <p className="text-body text-muted-foreground">
                  Assessment of electric vehicle adoption, charging infrastructure, supply chain development, and policy frameworks. We support institutional planning for Pakistan's electric mobility transition.
                </p>
              </div>

              {/* Technology Pilot Programs */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Technology Pilot Programs</h3>
                <p className="text-body text-muted-foreground">
                  Research support and feasibility assessment for pilot initiatives in emerging technologies. We help institutional stakeholders understand implementation requirements and scalability pathways.
                </p>
              </div>

              {/* Industrial Technology Integration */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Industrial Technology Integration</h3>
                <p className="text-body text-muted-foreground">
                  Assessment of technology adoption in industrial sectors, supply chain optimization, and productivity enhancement. We support long-term industrial planning and competitiveness.
                </p>
              </div>

              {/* Research and Analysis */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Research and Analysis</h3>
                <p className="text-body text-muted-foreground">
                  Market research, technology benchmarking, and comparative analysis supporting institutional decision-making regarding technology adoption and investment priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Long-Term Outlook */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Long-Term Institutional Planning
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Our technology work is framed within long-term institutional planning horizons. We support government bodies and strategic partners in developing comprehensive strategies that integrate technology adoption with industrial development, resource management, and policy frameworks.
              </p>
              <p className="text-body">
                We emphasize realistic assessment of implementation timelines, institutional capacity requirements, and resource commitments. Our recommendations are structured to support evidence-based institutional decision-making and long-term strategic planning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For technology assessment, research support, or strategic planning in electric vehicles and emerging technologies, please contact us.
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
