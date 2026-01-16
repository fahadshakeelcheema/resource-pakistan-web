import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Consultancy Page - Minimalist Institutional Design
 * Advisory services, strategic planning, institutional coordination
 */
export default function Consultancy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Consultancy & Advisory Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strategic planning and institutional advisory for government bodies, policy institutions, and strategic partners.
            </p>
          </div>
        </section>

        {/* Section 1: Advisory Services Overview */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">1.</span>Advisory Services for Institutional Stakeholders
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed">
              Resource Pakistan provides strategic advisory services to government bodies, policy institutions, think tanks, and strategic partners. Our consultancy work focuses on bridging policy frameworks with operational execution, supporting institutional decision-making across resource development, industrial planning, and technology assessment.
            </p>
            <p className="text-base text-foreground leading-relaxed mt-6">
              We understand the complexity of institutional planning and the requirement for rigorous analysis, stakeholder coordination, and alignment across multiple levels of government and policy frameworks.
            </p>
          </div>
        </section>

        {/* Section 2: Core Consultancy Services */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">2.</span>Core Consultancy Services
            </h2>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Strategic Planning and Policy Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advisory services supporting government bodies and policy institutions in developing long-term strategies for resource development, industrial growth, and technology integration. We provide analysis of policy options, institutional requirements, and implementation pathways.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Feasibility and Viability Assessment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive evaluation of proposed projects, initiatives, or policy frameworks. Our assessments integrate technical analysis, market assessment, regulatory requirements, and institutional feasibility.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Institutional Coordination and Stakeholder Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support for complex multi-stakeholder initiatives requiring coordination across government bodies, private sector organizations, and community groups. We facilitate structured engagement processes and support alignment across institutional levels.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Market and Sector Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Research and analysis of market dynamics, sectoral trends, and competitive landscape. We provide institutional stakeholders with evidence-based understanding of market opportunities and constraints.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Technology Assessment and Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Evaluation of emerging technologies and their application to Pakistan's industrial and resource development objectives. We support institutional decision-making regarding technology adoption and integration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Consultancy Methodology */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">3.</span>Consultancy Methodology
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Our consultancy work is grounded in rigorous analysis, institutional awareness, and long-term perspective. We begin each engagement with comprehensive understanding of the client's institutional context, policy objectives, and decision-making requirements.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              We deliver recommendations that are analytically sound, institutionally feasible, and aligned with long-term development objectives. Our deliverables are structured to support institutional decision-making, with clear documentation of analysis, assumptions, and recommendations.
            </p>
          </div>
        </section>

        {/* Section 4: Our Clients */}
        <section className="container py-20 md:py-24 border-t border-border">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-primary font-bold mr-3">4.</span>Our Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Government Bodies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Federal and provincial government bodies seeking strategic advisory and institutional planning support.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Policy Institutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Think tanks and policy research organizations requiring analysis and strategic planning support.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Strategic Investors</h3>
              <p className="text-muted-foreground leading-relaxed">
                International and domestic investors seeking market assessment and project evaluation services.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Industrial Sectors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology and industrial organizations requiring research support and strategic planning.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
