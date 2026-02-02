import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * About Page - Refined Institutional Design
 * Mission, principles, expertise, and ethics
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">About Resource Pakistan</h1>
            <p className="text-subheading">
              A multidisciplinary company founded to support Pakistan's resource and industrial development through rigorous planning, institutional alignment, and responsible execution.
            </p>
          </div>
        </section>

        {/* Section 1: Mission and Scope - Alternating Layout */}
        <section className="py-20 md:py-28 section-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Left */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/about-team-collaboration.jpg" 
                  alt="Professional team collaboration" 
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
              
              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Mission and Scope
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Resource Pakistan operates at the interface between resource development, policy frameworks, and industrial strategy. We provide advisory, analytical, and planning services to government bodies, institutional stakeholders, and strategic partners seeking to advance feasibility-driven projects across mining, consultancy, electric vehicles, and industrial technology sectors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our work is grounded in the principle that sustainable resource and industrial development requires rigorous feasibility assessment, institutional alignment, and long-term commitment. We reject transactional approaches in favor of structured, evidence-based planning that serves Pakistan's long-term economic interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Principles */}
        <section className="py-20 md:py-28 section-green border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>2.</span>Core Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Institutional Integrity */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Institutional Integrity</h3>
                <p className="text-body text-muted-foreground">
                  We operate with transparency and accountability, understanding that our work informs institutional decision-making. Every recommendation is grounded in rigorous analysis and documented evidence.
                </p>
              </div>

              {/* Feasibility First */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Feasibility First</h3>
                <p className="text-body text-muted-foreground">
                  We prioritize realistic assessment over optimistic projections. Our role is to provide decision-makers with clear understanding of opportunities, constraints, and implementation requirements.
                </p>
              </div>

              {/* Responsible Development */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Responsible Development</h3>
                <p className="text-body text-muted-foreground">
                  Resource and industrial development must integrate environmental stewardship, socio-economic considerations, and compliance. We embed these principles into every engagement.
                </p>
              </div>

              {/* Multidisciplinary Approach */}
              <div className="card-institutional">
                <h3 className="text-lg font-bold text-foreground mb-4">Multidisciplinary Approach</h3>
                <p className="text-body text-muted-foreground">
                  Complex challenges require diverse expertise. We bring together specialists across mining, consultancy, technology, and industrial planning.
                </p>
              </div>

              {/* Long-Term Perspective */}
              <div className="card-institutional md:col-span-2">
                <h3 className="text-lg font-bold text-foreground mb-4">Long-Term Perspective</h3>
                <p className="text-body text-muted-foreground">
                  We view our engagements as contributions to Pakistan's long-term development trajectory, not short-term transactions. This perspective shapes our recommendations and approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Expertise and Experience */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Expertise and Experience
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Our team comprises professionals with extensive experience in resource development, institutional planning, technology assessment, and strategic advisory. We have worked across government bodies, policy institutions, and private sector organizations, developing deep understanding of Pakistan's institutional landscape and sectoral dynamics.
              </p>
              <p className="text-body">
                Our expertise spans feasibility study methodology, environmental and social impact assessment, technology evaluation, industrial policy analysis, and stakeholder coordination. We combine technical rigor with institutional awareness to deliver recommendations that are both analytically sound and operationally feasible.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Ethics, Compliance, and Confidentiality */}
        <section className="py-20 md:py-28 section-green border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>4.</span>Ethics, Compliance, and Confidentiality
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Resource Pakistan operates under strict ethical and compliance standards. We maintain confidentiality regarding all client information, project details, and strategic discussions. Our work is structured to support institutional decision-making processes while respecting the sensitive nature of resource development and policy planning.
              </p>
              <p className="text-body mb-6">
                We are committed to responsible resource development that integrates environmental protection, community considerations, and long-term sustainability. All our recommendations are subject to institutional review and are designed to withstand scrutiny from government bodies, policy analysts, and stakeholder groups.
              </p>
              <p className="text-body">
                Our engagement framework prioritizes transparency, documented analysis, and clear communication of assumptions, limitations, and recommendations. We understand that our work may inform public policy and institutional decisions, and we structure our deliverables accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              To learn more about our services or discuss a potential engagement, please contact us.
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
