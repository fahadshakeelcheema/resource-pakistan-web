import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Governance Page - Refined Institutional Design
 * Ethics, compliance, responsibility, stakeholder coordination
 */
export default function Governance() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-border">
          <div 
            className="absolute inset-0 opacity-[0.06] grayscale"
            style={{backgroundImage: 'url(/images/pakistan-reko-diq-landscape.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6">Governance & Responsibility</h1>
              <p className="text-subheading">
                Ethics, compliance, and responsible resource development aligned with institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Governance Framework with Icon */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Governance Framework
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Icon Left - Balance/Scales of Justice */}
              <div className="flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Pillar */}
                  <rect x="190" y="150" width="20" height="180" fill="#2d5a3d" />
                  <rect x="170" y="320" width="60" height="15" fill="#095d29" rx="2" />
                  
                  {/* Balance Beam */}
                  <rect x="100" y="145" width="200" height="10" fill="#2d5a3d" rx="2" />
                  
                  {/* Left Scale */}
                  <line x1="120" y1="155" x2="100" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  <line x1="120" y1="155" x2="140" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  <path d="M 80 200 L 100 200 L 120 220 L 100 220 L 80 200 Z" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <path d="M 100 200 L 120 200 L 140 220 L 120 220 L 100 200 Z" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Right Scale */}
                  <line x1="280" y1="155" x2="260" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  <line x1="280" y1="155" x2="300" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  <path d="M 240 200 L 260 200 L 280 220 L 260 220 L 240 200 Z" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <path d="M 260 200 L 280 200 L 300 220 L 280 220 L 260 200 Z" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Center Pivot */}
                  <circle cx="200" cy="150" r="8" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Decorative Elements - Governance Symbols */}
                  <circle cx="110" cy="210" r="6" fill="#ffffff" opacity="0.7" />
                  <circle cx="270" cy="210" r="6" fill="#ffffff" opacity="0.7" />
                  
                  {/* Shield Symbol (Compliance) */}
                  <path d="M 200 80 L 180 85 L 180 105 Q 180 120 200 130 Q 220 120 220 105 L 220 85 Z" fill="#2d5a3d" stroke="#095d29" strokeWidth="2" />
                  <path d="M 195 100 L 198 105 L 205 95" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Text Right */}
              <div>
                <p className="text-body mb-6">
                  Resource Pakistan operates under strict ethical, compliance, and governance standards. Our work is structured to support institutional decision-making while maintaining confidentiality, transparency, and accountability. We understand that our recommendations may inform policy and institutional decisions, and we structure our engagement accordingly.
                </p>
                <p className="text-body">
                  We are committed to responsible resource and industrial development that integrates environmental protection, socio-economic considerations, and long-term sustainability. All our work is subject to institutional review and designed to withstand scrutiny from government bodies, policy analysts, and stakeholder groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Ethical Principles */}
        <section className="py-20 md:py-28 section-green border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>2.</span>Ethical Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Integrity and Transparency */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredPrinciple('integrity')}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Integrity and Transparency
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === 'integrity' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    We operate with transparency and accountability, documenting all analysis and recommendations. Our engagement framework prioritizes clear communication of assumptions, limitations, and evidence-based conclusions.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredPrinciple('confidentiality')}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Confidentiality
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === 'confidentiality' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    We maintain strict confidentiality regarding all client information, project details, and strategic discussions. Our work respects the sensitive nature of resource development and policy planning.
                  </p>
                </div>
              </div>

              {/* Responsible Development */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredPrinciple('responsible')}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Responsible Development
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === 'responsible' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Resource and industrial development must integrate environmental stewardship, community considerations, and long-term sustainability. We embed these principles into every engagement.
                  </p>
                </div>
              </div>

              {/* Institutional Alignment */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredPrinciple('alignment')}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Institutional Alignment
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredPrinciple === 'alignment' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Our work is structured to support institutional decision-making processes and align with Pakistan's governance frameworks, policy objectives, and long-term development priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Compliance and Standards */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Compliance and Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* SVG Diagram - Compliance Layers */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 350" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Base Layer - Regulatory Framework */}
                  <rect x="50" y="250" width="300" height="60" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" rx="4" />
                  <text x="200" y="285" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="600">Regulatory Framework</text>
                  
                  {/* Second Layer - Environmental Standards */}
                  <rect x="75" y="180" width="250" height="60" fill="#2d5a3d" stroke="#095d29" strokeWidth="2" rx="4" />
                  <text x="200" y="215" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="600">Environmental Standards</text>
                  
                  {/* Third Layer - Institutional Requirements */}
                  <rect x="100" y="110" width="200" height="60" fill="#3d7a4f" stroke="#2d5a3d" strokeWidth="2" rx="4" />
                  <text x="200" y="145" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="600">Institutional Requirements</text>
                  
                  {/* Top Layer - Advisory Excellence */}
                  <rect x="125" y="40" width="150" height="60" fill="#4d8a5f" stroke="#2d5a3d" strokeWidth="2" rx="4" />
                  <text x="200" y="75" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="600">Advisory Excellence</text>
                  
                  {/* Checkmarks for each layer - positioned on right side */}
                  <path d="M 320 275 L 325 282 L 335 268" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 295 205 L 300 212 L 310 198" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 270 135 L 275 142 L 285 128" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 250 65 L 255 72 L 265 58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <p className="text-body mb-6">
                  Resource Pakistan operates in compliance with Pakistan's regulatory frameworks, environmental standards, and institutional requirements. All our recommendations are designed to support compliance and withstand institutional review. We maintain awareness of evolving policy frameworks and adjust our advisory services accordingly.
                </p>
                <p className="text-body">
                  Our engagement methodology integrates compliance requirements from the outset, ensuring that all recommendations are feasible within Pakistan's institutional and regulatory context. We support clients in understanding compliance requirements and developing implementation strategies aligned with institutional standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Stakeholder Coordination */}
        <section className="py-20 md:py-28 section-green border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>4.</span>Stakeholder Coordination
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div>
                <p className="text-body mb-6" style={{color: '#ede0d4'}}>
                  Resource development and industrial planning require coordination across multiple stakeholder groups including government bodies, policy institutions, local communities, and strategic partners. We facilitate structured engagement processes and support alignment across institutional levels and sectoral interests.
                </p>
                <p className="text-body" style={{color: '#ede0d4'}}>
                  Our stakeholder coordination approach prioritizes transparency, documented communication, and institutional alignment. We help decision-makers navigate complex multi-stakeholder environments and develop consensus around feasibility-driven strategies.
                </p>
              </div>

              {/* SVG Diagram - Stakeholder Network */}
              <div className="flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Hub - Resource Pakistan */}
                  <circle cx="200" cy="200" r="50" fill="#ede0d4" stroke="#ffffff" strokeWidth="3" />
                  <text x="200" y="200" fontSize="13" fill="#095d29" textAnchor="middle" fontWeight="bold">Resource</text>
                  <text x="200" y="215" fontSize="13" fill="#095d29" textAnchor="middle" fontWeight="bold">Pakistan</text>
                  
                  {/* Government Bodies (Top) */}
                  <line x1="200" y1="150" x2="200" y2="80" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                  <circle cx="200" cy="60" r="35" fill="#ffffff" fillOpacity="0.2" stroke="#ffffff" strokeWidth="2" />
                  <text x="200" y="60" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Government</text>
                  <text x="200" y="73" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Bodies</text>
                  
                  {/* Policy Institutions (Right) */}
                  <line x1="250" y1="200" x2="320" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                  <circle cx="340" cy="200" r="35" fill="#ffffff" fillOpacity="0.2" stroke="#ffffff" strokeWidth="2" />
                  <text x="340" y="200" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Policy</text>
                  <text x="340" y="213" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Institutions</text>
                  
                  {/* Local Communities (Bottom) */}
                  <line x1="200" y1="250" x2="200" y2="320" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                  <circle cx="200" cy="340" r="35" fill="#ffffff" fillOpacity="0.2" stroke="#ffffff" strokeWidth="2" />
                  <text x="200" y="340" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Local</text>
                  <text x="200" y="353" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Communities</text>
                  
                  {/* Strategic Partners (Left) */}
                  <line x1="150" y1="200" x2="80" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                  <circle cx="60" cy="200" r="35" fill="#ffffff" fillOpacity="0.2" stroke="#ffffff" strokeWidth="2" />
                  <text x="60" y="200" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Strategic</text>
                  <text x="60" y="213" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="600">Partners</text>
                  
                  {/* Connection dots */}
                  <circle cx="200" cy="150" r="4" fill="#ffffff" />
                  <circle cx="250" cy="200" r="4" fill="#ffffff" />
                  <circle cx="200" cy="250" r="4" fill="#ffffff" />
                  <circle cx="150" cy="200" r="4" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-cream border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For questions regarding our governance framework, compliance standards, or ethical principles, please contact us.
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
