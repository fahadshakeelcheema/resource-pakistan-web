import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Mining Page - Minimalist Institutional Design
 * Responsible mineral development, feasibility studies, compliance
 */
export default function Mining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Mining & Resource Development
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Responsible mineral development through comprehensive feasibility assessment and institutional alignment.
            </p>
          </div>
        </section>

        {/* Section 1: Our Approach to Mining */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>Feasibility-Driven Resource Development
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              Mining and resource extraction require rigorous feasibility assessment, compliance planning, and long-term value-chain analysis. Resource Pakistan provides comprehensive advisory services covering geological assessment, economic viability, regulatory compliance, and implementation planning.
            </p>
            <p className="text-base text-foreground leading-relaxed mt-6">
              Our approach integrates technical analysis with institutional requirements, ensuring that resource development projects are both economically sound and aligned with Pakistan's policy frameworks and environmental standards.
            </p>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Core Services
            </h2>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Feasibility Studies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive assessment of mineral resources including geological evaluation, economic analysis, market assessment, and implementation requirements. Our feasibility studies provide decision-makers with clear understanding of project viability and constraints.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Compliance and Regulatory Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detailed analysis of regulatory requirements, environmental standards, and institutional frameworks governing resource extraction. We support clients in developing compliance strategies that integrate technical operations with institutional requirements.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Value-Chain Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Assessment of resource extraction, processing, and market opportunities. We evaluate opportunities across the value chain to identify where value creation is possible and where institutional or market constraints apply.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Stakeholder Coordination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resource development involves coordination across government bodies, local communities, environmental authorities, and other stakeholders. We provide advisory services supporting structured stakeholder engagement and institutional alignment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Environmental and Social Assessment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integration of environmental protection and socio-economic considerations into resource development planning. We support clients in developing approaches that balance resource opportunity with institutional and community requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical and Institutional Knowledge */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Technical and Institutional Knowledge
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Our team brings together specialists in geology, mining engineering, environmental assessment, regulatory compliance, and institutional planning. We have experience across Pakistan's major mineral-bearing regions and understand the institutional landscape governing resource development.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              We approach mining as a long-term institutional commitment, not a transactional exercise. Our recommendations are structured to support decision-making by government bodies and strategic partners, with full integration of feasibility, compliance, and sustainability considerations.
            </p>
          </div>
        </section>

        {/* Section 4: Responsible Information Management */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">4.</span>Responsible Information Management
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              We understand that resource development information is sensitive and subject to institutional confidentiality requirements. All our work is conducted under strict confidentiality protocols. We do not disclose specific project locations, geological data, or strategic details without explicit authorization.
            </p>
            <p className="text-base text-foreground leading-relaxed mt-6">
              Our engagement framework is designed to support institutional decision-making while respecting the sensitive nature of resource development planning.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
