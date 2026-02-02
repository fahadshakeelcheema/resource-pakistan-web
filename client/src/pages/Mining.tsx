import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Mining Page - Refined Institutional Design
 * Responsible mineral development, feasibility studies, compliance
 */
export default function Mining() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setExpandedService(expandedService === service ? null : service);
  };

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
              <h1 className="text-display mb-6">Mining & Resource Development</h1>
              <p className="text-subheading">
                Responsible mineral development through comprehensive feasibility assessment and institutional alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Our Approach to Mining - Alternating Layout */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Feasibility-Driven Resource Development
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mining and resource extraction require rigorous feasibility assessment, compliance planning, and long-term value-chain analysis. Resource Pakistan provides comprehensive advisory services covering geological assessment, economic viability, regulatory compliance, and implementation planning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach integrates technical analysis with institutional requirements, ensuring that resource development projects are both economically sound and aligned with Pakistan's policy frameworks and environmental standards.
                </p>
              </div>
              
              {/* Icon Right - Mining Pickaxe and Layers */}
              <div className="flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Geological Layers */}
                  <rect x="50" y="100" width="300" height="40" fill="#2d5a3d" opacity="0.9" />
                  <rect x="50" y="145" width="300" height="35" fill="#2d5a3d" opacity="0.7" />
                  <rect x="50" y="185" width="300" height="45" fill="#2d5a3d" opacity="0.5" />
                  <rect x="50" y="235" width="300" height="40" fill="#2d5a3d" opacity="0.3" />
                  
                  {/* Mineral Deposit Indicators */}
                  <circle cx="120" cy="160" r="8" fill="#095d29" />
                  <circle cx="180" cy="205" r="10" fill="#095d29" />
                  <circle cx="250" cy="170" r="7" fill="#095d29" />
                  <circle cx="290" cy="250" r="9" fill="#095d29" />
                  
                  {/* Pickaxe Tool */}
                  <g transform="translate(200, 300)">
                    {/* Handle */}
                    <rect x="-6" y="-80" width="12" height="100" fill="#6b6259" rx="2" />
                    {/* Pickaxe Head */}
                    <polygon points="-40,-90 40,-90 30,-70 -30,-70" fill="#2d5a3d" />
                    <polygon points="-5,-90 5,-90 5,-110 -5,-110" fill="#2d5a3d" />
                  </g>
                  
                  {/* Layer Labels */}
                  <text x="360" y="125" fontSize="12" fill="#2d5a3d" textAnchor="end">Surface</text>
                  <text x="360" y="165" fontSize="12" fill="#2d5a3d" textAnchor="end">Sediment</text>
                  <text x="360" y="210" fontSize="12" fill="#2d5a3d" textAnchor="end">Ore Layer</text>
                  <text x="360" y="255" fontSize="12" fill="#2d5a3d" textAnchor="end">Bedrock</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="py-20 md:py-28 section-green border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>2.</span>Core Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feasibility Studies */}
              <div 
                className="card-institutional cursor-pointer transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onClick={() => toggleService('feasibility')}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Feasibility Studies
                  <span className="ml-2 text-sm">{expandedService === 'feasibility' ? '−' : '+'}</span>
                </h3>
                {expandedService === 'feasibility' && (
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Comprehensive assessment of mineral deposits, extraction viability, market conditions, and implementation requirements. We prioritize realistic analysis over optimistic projections.
                  </p>
                )}
              </div>

              {/* Compliance & Regulatory Planning */}
              <div 
                className="card-institutional cursor-pointer transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onClick={() => toggleService('compliance')}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Compliance & Regulatory Planning
                  <span className="ml-2 text-sm">{expandedService === 'compliance' ? '−' : '+'}</span>
                </h3>
                {expandedService === 'compliance' && (
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Navigation of Pakistan's regulatory frameworks, environmental standards, and institutional requirements. We ensure projects are structured for institutional approval and long-term sustainability.
                  </p>
                )}
              </div>

              {/* Value-Chain Analysis */}
              <div 
                className="card-institutional cursor-pointer transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onClick={() => toggleService('valuechain')}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Value-Chain Analysis
                  <span className="ml-2 text-sm">{expandedService === 'valuechain' ? '−' : '+'}</span>
                </h3>
                {expandedService === 'valuechain' && (
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Assessment of extraction, processing, and market dynamics. We identify opportunities for value addition and institutional coordination across the supply chain.
                  </p>
                )}
              </div>

              {/* Stakeholder Coordination */}
              <div 
                className="card-institutional cursor-pointer transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onClick={() => toggleService('stakeholder')}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Stakeholder Coordination
                  <span className="ml-2 text-sm">{expandedService === 'stakeholder' ? '−' : '+'}</span>
                </h3>
                {expandedService === 'stakeholder' && (
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Engagement with government bodies, policy institutions, local stakeholders, and strategic partners. We facilitate institutional alignment and long-term planning.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Geological Context */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>3.</span>Pakistan's Geological Context
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-body mb-6">
                  Pakistan's geological diversity spans multiple tectonic zones, creating significant mineral potential across Balochistan, Khyber Pakhtunkhwa, and other regions. Understanding this geological context is essential for feasibility assessment and responsible resource development.
                </p>
                <p className="text-body">
                  Our work integrates geological data, tectonic analysis, and regional mineral surveys to provide comprehensive assessment of resource opportunities and extraction viability.
                </p>
              </div>
              <div className="card-institutional p-0 overflow-hidden">
                <img 
                  src="/images/pakistan-tectonic-map.jpg" 
                  alt="Pakistan Geological and Tectonic Map" 
                  className="w-full h-auto"
                />
                <div className="p-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground">Pakistan's tectonic structure and geological formations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technical Knowledge */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">4.</span>Technical Knowledge and Expertise
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-body mb-6">
                Our team brings together professionals with experience in geological assessment, mining engineering, environmental impact analysis, and institutional planning. We have worked on projects across Pakistan's major mineral-bearing regions, developing deep understanding of local geology, regulatory requirements, and institutional dynamics.
              </p>
              <p className="text-body">
                We combine technical rigor with institutional awareness, ensuring that our recommendations are both analytically sound and operationally feasible within Pakistan's policy and governance frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-light border-t border-border">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For mining feasibility studies, compliance planning, or resource development advisory, please contact us.
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
