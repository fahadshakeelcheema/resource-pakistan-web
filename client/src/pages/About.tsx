import { Link } from "wouter";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

/**
 * About Page - Refined Institutional Design
 * Mission, principles, expertise, and ethics
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
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/HjuvozCNZQjtDKdL.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6 text-white drop-shadow-lg">About Resource Pakistan</h1>
              <p className="text-subheading text-white drop-shadow-lg">
                A multidisciplinary company founded to support Pakistan's
                resource and industrial development through rigorous planning,
                institutional alignment, and responsible execution.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Mission and Scope - Alternating Layout */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-border bg-white">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
              {/* Icon Left - Mission Compass */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="4"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="#2d5a3d"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Cardinal Points */}
                  <text
                    x="200"
                    y="50"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d5a3d"
                  >
                    N
                  </text>
                  <text
                    x="200"
                    y="365"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d5a3d"
                  >
                    S
                  </text>
                  <text
                    x="50"
                    y="210"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d5a3d"
                  >
                    W
                  </text>
                  <text
                    x="350"
                    y="210"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d5a3d"
                  >
                    E
                  </text>

                  {/* Compass Needle - pointing to strategic direction */}
                  <g transform="rotate(-30 200 200)">
                    <polygon
                      points="200,80 210,200 200,210 190,200"
                      fill="#095d29"
                    />
                    <polygon
                      points="200,210 210,200 200,320 190,200"
                      fill="#2d5a3d"
                      opacity="0.6"
                    />
                  </g>

                  {/* Center Circle */}
                  <circle cx="200" cy="200" r="15" fill="#095d29" />
                  <circle cx="200" cy="200" r="8" fill="#ffffff" />

                  {/* Degree Marks */}
                  <g stroke="#2d5a3d" strokeWidth="2" opacity="0.4">
                    <line x1="200" y1="30" x2="200" y2="50" />
                    <line x1="200" y1="350" x2="200" y2="370" />
                    <line x1="30" y1="200" x2="50" y2="200" />
                    <line x1="350" y1="200" x2="370" y2="200" />
                  </g>
                </svg>
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
                  Mission and Scope
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: "#2d2d2d" }}>
                  Resource Pakistan operates at the interface between resource
                  development, policy frameworks, and industrial strategy. We
                  provide advisory, analytical, and planning services to
                  government bodies, institutional stakeholders, and strategic
                  partners seeking to advance feasibility-driven projects across
                  mining, consultancy, electric vehicles, and industrial
                  technology sectors.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "#2d2d2d" }}>
                  Our work is grounded in the principle that sustainable
                  resource and industrial development requires rigorous
                  feasibility assessment, institutional alignment, and long-term
                  commitment. We reject transactional approaches in favor of
                  structured, evidence-based planning that serves Pakistan's
                  long-term economic interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Expertise and Experience */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading">Expertise and Experience</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
              {/* Text Left */}
              <div className="order-1">
                <p className="text-body mb-6">
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

              {/* Icon Right - Circular Flow Diagram */}
              <div className="order-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Circular arrow path - anticlockwise flow */}
                  {/* Advisory to Trainings (left to top) */}
                  <path
                    d="M 80 200 Q 80 80, 200 80"
                    fill="none"
                    stroke="#2d5a8c"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Trainings to Tech (top to right) */}
                  <path
                    d="M 200 80 Q 320 80, 320 200"
                    fill="none"
                    stroke="#2d5a8c"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Tech to Defence (right to bottom) */}
                  <path
                    d="M 320 200 Q 320 320, 200 320"
                    fill="none"
                    stroke="#2d5a8c"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Defence to Advisory (bottom to left) */}
                  <path
                    d="M 200 320 Q 80 320, 80 200"
                    fill="none"
                    stroke="#2d5a8c"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Arrow marker definition */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#2d5a8c" />
                    </marker>
                  </defs>

                  {/* Expertise Area Nodes */}
                  {/* Advisory (Left) */}
                  <circle cx="80" cy="200" r="40" fill="#1e3a5f" stroke="#2d5a8c" strokeWidth="2" />
                  <text
                    x="80"
                    y="207"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Advisory
                  </text>

                  {/* Trainings (Top) */}
                  <circle cx="200" cy="80" r="40" fill="#1e3a5f" stroke="#2d5a8c" strokeWidth="2" />
                  <text
                    x="200"
                    y="87"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Trainings
                  </text>

                  {/* Tech (Right) */}
                  <circle cx="320" cy="200" r="40" fill="#1e3a5f" stroke="#2d5a8c" strokeWidth="2" />
                  <text
                    x="320"
                    y="207"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Tech
                  </text>

                  {/* Defence (Bottom) */}
                  <circle cx="200" cy="320" r="40" fill="#1e3a5f" stroke="#2d5a8c" strokeWidth="2" />
                  <text
                    x="200"
                    y="327"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Defence
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Ethics, Compliance, and Confidentiality */}
        <section className="py-12 md:py-16 section-green border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>
                Ethics, Compliance, and Confidentiality
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
              {/* Text Left */}
              <div className="order-1 lg:order-1">
                <p className="text-body mb-6">
                  Resource Pakistan operates under strict ethical and compliance
                  standards. We maintain confidentiality regarding all client
                  information, project details, and strategic discussions. Our
                  work is structured to support institutional decision-making
                  processes while respecting the sensitive nature of resource
                  development and policy planning.
                </p>
                <p className="text-body mb-6">
                  We are committed to responsible resource development that
                  integrates environmental protection, community considerations,
                  and long-term sustainability. All our recommendations are
                  subject to institutional review and are designed to withstand
                  scrutiny from government bodies, policy analysts, and
                  stakeholder groups.
                </p>
                <p className="text-body">
                  Our engagement framework prioritizes transparency, documented
                  analysis, and clear communication of assumptions, limitations,
                  and recommendations. We understand that our work may inform
                  public policy and institutional decisions, and we structure
                  our deliverables accordingly.
                </p>
              </div>

              {/* Icon Right - Shield of Integrity */}
              <div className="order-2 lg:order-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Shield Outline */}
                  <path
                    d="M 200 50 L 320 100 L 320 200 Q 320 300 200 350 Q 80 300 80 200 L 80 100 Z"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="4"
                  />
                  <path
                    d="M 200 60 L 310 105 L 310 200 Q 310 290 200 335 Q 90 290 90 200 L 90 105 Z"
                    fill="#B8860B"
                    opacity="0.9"
                  />

                  {/* Checkmark */}
                  <path
                    d="M 140 200 L 180 240 L 260 150"
                    fill="none"
                    stroke="#C9A961"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Inner Shield Details */}
                  <path
                    d="M 200 70 L 200 320"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    d="M 100 110 L 300 110"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              To learn more about our services or discuss a potential
              engagement, please contact us.
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
    </>
  );
}
