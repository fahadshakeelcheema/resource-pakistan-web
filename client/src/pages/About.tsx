import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

/**
 * About Page - Refined Institutional Design
 * Mission, principles, expertise, and ethics
 */
export default function About() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Breadcrumb items={[{ label: "About Us" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-10 md:py-10 border-b border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/HjuvozCNZQjtDKdL.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
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
        <section className="py-8 md:py-10 section-cream">
          <div className="container">
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
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Mission and Scope
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Resource Pakistan operates at the interface between resource
                  development, policy frameworks, and industrial strategy. We
                  provide advisory, analytical, and planning services to
                  government bodies, institutional stakeholders, and strategic
                  partners seeking to advance feasibility-driven projects across
                  mining, consultancy, electric vehicles, and industrial
                  technology sectors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
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

        {/* Section 2: Core Principles */}
        <section className="py-8 md:py-10 section-green border-t border-border">
          <div className="container">
            <div className="mb-6">
              <h2 className="text-heading" style={{ color: "#ffffff" }}>
                Core Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Institutional Integrity */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredPrinciple("integrity")}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Institutional Integrity
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === "integrity" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    We operate with transparency and accountability,
                    understanding that our work informs institutional
                    decision-making. Every recommendation is grounded in
                    rigorous analysis and documented evidence.
                  </p>
                </div>
              </div>

              {/* Feasibility First */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredPrinciple("feasibility")}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Feasibility First
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === "feasibility" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    We prioritize realistic assessment over optimistic
                    projections. Our role is to provide decision-makers with
                    clear understanding of opportunities, constraints, and
                    implementation requirements.
                  </p>
                </div>
              </div>

              {/* Responsible Development */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredPrinciple("responsible")}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Responsible Development
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === "responsible" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Resource and industrial development must integrate
                    environmental stewardship, socio-economic considerations,
                    and compliance. We embed these principles into every
                    engagement.
                  </p>
                </div>
              </div>

              {/* Multidisciplinary Approach */}
              <div
                className="card-institutional transition-all hover:shadow-lg"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredPrinciple("multidisciplinary")}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Multidisciplinary Approach
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === "multidisciplinary" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    Complex challenges require diverse expertise. We bring
                    together specialists across mining, consultancy, technology,
                    and industrial planning.
                  </p>
                </div>
              </div>

              {/* Long-Term Perspective */}
              <div
                className="card-institutional md:col-span-2 transition-all hover:shadow-lg md:mx-auto md:max-w-2xl"
                style={{ backgroundColor: "#095d29" }}
                onMouseEnter={() => setHoveredPrinciple("longterm")}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3
                  className="text-lg font-bold text-foreground mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Long-Term Perspective
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === "longterm" ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p
                    className="text-body text-muted-foreground"
                    style={{ color: "#c8bfb6" }}
                  >
                    We view our engagements as contributions to Pakistan's
                    long-term development trajectory, not short-term
                    transactions. This perspective shapes our recommendations
                    and approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Expertise and Experience */}
        <section className="py-8 md:py-10 section-cream border-t border-border">
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

              {/* Icon Right - Interconnected Expertise */}
              <div className="order-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Hub */}
                  <circle cx="200" cy="200" r="40" fill="#095d29" />
                  <text
                    x="200"
                    y="210"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Core
                  </text>

                  {/* Outer Nodes - Expertise Areas */}
                  {/* Mining */}
                  <circle cx="200" cy="80" r="35" fill="#2d5a3d" />
                  <text
                    x="200"
                    y="88"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Mining
                  </text>
                  <line
                    x1="200"
                    y1="160"
                    x2="200"
                    y2="115"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Consultancy */}
                  <circle cx="320" cy="200" r="35" fill="#2d5a3d" />
                  <text
                    x="320"
                    y="205"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Advisory
                  </text>
                  <line
                    x1="240"
                    y1="200"
                    x2="285"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Technology */}
                  <circle cx="200" cy="320" r="35" fill="#2d5a3d" />
                  <text
                    x="200"
                    y="325"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Tech
                  </text>
                  <line
                    x1="200"
                    y1="240"
                    x2="200"
                    y2="285"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Industrial */}
                  <circle cx="80" cy="200" r="35" fill="#2d5a3d" />
                  <text
                    x="80"
                    y="205"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="bold"
                    fill="#ffffff"
                  >
                    Industrial
                  </text>
                  <line
                    x1="160"
                    y1="200"
                    x2="115"
                    y2="200"
                    stroke="#2d5a3d"
                    strokeWidth="3"
                  />

                  {/* Cross-connections showing integration */}
                  <line
                    x1="220"
                    y1="180"
                    x2="290"
                    y2="220"
                    stroke="#2d5a3d"
                    strokeWidth="1.5"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="180"
                    y1="180"
                    x2="110"
                    y2="220"
                    stroke="#2d5a3d"
                    strokeWidth="1.5"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="180"
                    y1="220"
                    x2="110"
                    y2="180"
                    stroke="#2d5a3d"
                    strokeWidth="1.5"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="220"
                    y1="220"
                    x2="290"
                    y2="180"
                    stroke="#2d5a3d"
                    strokeWidth="1.5"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Ethics, Compliance, and Confidentiality */}
        <section className="py-8 md:py-10 section-green border-t border-border">
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
                    stroke="#ffffff"
                    strokeWidth="4"
                  />
                  <path
                    d="M 200 60 L 310 105 L 310 200 Q 310 290 200 335 Q 90 290 90 200 L 90 105 Z"
                    fill="#095d29"
                    opacity="0.9"
                  />

                  {/* Checkmark */}
                  <path
                    d="M 140 200 L 180 240 L 260 150"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Inner Shield Details */}
                  <path
                    d="M 200 70 L 200 320"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <path
                    d="M 100 110 L 300 110"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-10 section-cream border-t border-border">
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
  );
}
