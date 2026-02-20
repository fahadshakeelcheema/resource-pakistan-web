import { Link } from "wouter";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * About Us Page - Simplified Center-Aligned Design
 * Company background, mission, expertise
 */
export default function About() {
  return (
    <>
      <SEO metadata={seoConfig.about} />
      <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "About Us" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 border-b border-border bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c]">
          <div className="container relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-display mb-6 text-white drop-shadow-lg">About Resource Pakistan</h1>
              <p className="text-subheading text-white drop-shadow-lg font-semibold">
                Strategic advisory, resource development, and institutional planning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Mission and Scope */}
        <section className="py-10 md:py-12 bg-white border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-heading mb-4">Mission and Scope</h2>
              <p className="text-body mb-4">
                Resource Pakistan (Pvt) Ltd is a strategic advisory and development firm
                focused on resource development, industrial planning, and institutional
                consultancy. We work with government bodies, policy institutions, and
                strategic partners to advance feasibility-driven projects across mining,
                consultancy, electric vehicles, and industrial technology sectors.
              </p>
              <p className="text-body">
                Our mission is to support Pakistan's long-term economic development
                through rigorous analysis, responsible resource planning, and
                institutional alignment. We prioritize sustainable development,
                compliance with regulatory frameworks, and stakeholder coordination in
                all our engagements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Expertise and Experience */}
        <section className="py-10 md:py-12 section-cream border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-heading mb-4">Expertise and Experience</h2>
              <p className="text-body mb-4">
                Our team comprises professionals with extensive experience in
                resource development, institutional planning, technology
                assessment, and strategic advisory. We have worked across
                government bodies, policy institutions, and private sector
                organizations, developing deep understanding of Pakistan's
                institutional landscape and sectoral dynamics.
              </p>
              <p className="text-body">
                Our expertise spans feasibility study methodology,
                environmental and social impact assessment, technology
                evaluation, industrial policy analysis, and stakeholder
                coordination. We combine technical rigor with institutional
                awareness to deliver recommendations that are both
                analytically sound and operationally feasible.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Ethics, Compliance, and Confidentiality */}
        <section className="py-10 md:py-12 section-green border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-heading mb-4" style={{ color: "#ffffff" }}>
                Ethics, Compliance, and Confidentiality
              </h2>
              <p className="text-body mb-4" style={{ color: "#ede0d4" }}>
                Resource Pakistan operates under strict ethical and compliance
                standards. We maintain confidentiality regarding all client
                information, project details, and strategic discussions. Our
                work is structured to support institutional decision-making
                processes while respecting the sensitive nature of resource
                development and policy planning.
              </p>
              <p className="text-body mb-4" style={{ color: "#ede0d4" }}>
                We are committed to responsible resource development that
                integrates environmental protection, community considerations,
                and long-term sustainability. All our recommendations are
                subject to institutional review and are designed to withstand
                scrutiny from government bodies, policy analysts, and
                stakeholder groups.
              </p>
              <p className="text-body" style={{ color: "#ede0d4" }}>
                Our engagement framework prioritizes transparency, documented
                analysis, and clear communication of assumptions, limitations,
                and recommendations. We understand that our work may inform
                public policy and institutional decisions, and we structure
                our deliverables accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              For inquiries regarding our services, strategic partnerships, or
              institutional engagements, please contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
