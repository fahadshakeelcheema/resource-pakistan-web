import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Technology Page - Refined Institutional Design
 * Electric vehicles, emerging technologies, research-focused initiatives
 */
export default function Technology() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-14 border-b border-border">
          <div 
            className="absolute inset-0 opacity-[0.06] grayscale"
            style={{backgroundImage: 'url(/images/pakistan-reko-diq-landscape.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-6">Electric Vehicles & Emerging Technologies</h1>
              <p className="text-subheading">
                Research-focused initiatives in electric mobility and emerging industrial technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Technology Strategy with Icon */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-heading">
                <span className="section-number">1.</span>Technology Strategy and Assessment
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* Text Left */}
              <div>
                <p className="text-body mb-6">
                  Electric vehicles and emerging industrial technologies represent significant opportunities for Pakistan's long-term development. Resource Pakistan provides research-focused advisory services supporting institutional assessment of technology opportunities, pilot programs, and long-term integration strategies.
                </p>
                <p className="text-body">
                  Our approach emphasizes feasibility assessment, institutional alignment, and realistic evaluation of implementation requirements. We support government bodies and strategic partners in understanding technology adoption pathways and long-term institutional planning.
                </p>
              </div>
              
              {/* Icon Right - Electric Vehicle and Circuit */}
              <div className="flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Electric Vehicle Silhouette */}
                  <g transform="translate(200, 180)">
                    {/* Car Body */}
                    <rect x="-80" y="-30" width="160" height="50" fill="#2d5a3d" rx="8" />
                    {/* Car Roof */}
                    <path d="M -50 -30 L -30 -60 L 30 -60 L 50 -30 Z" fill="#2d5a3d" />
                    {/* Windows */}
                    <rect x="-45" y="-55" width="35" height="20" fill="#c8bfb6" rx="2" />
                    <rect x="10" y="-55" width="35" height="20" fill="#c8bfb6" rx="2" />
                    {/* Wheels */}
                    <circle cx="-50" cy="25" r="15" fill="#095d29" stroke="#2d5a3d" strokeWidth="3" />
                    <circle cx="50" cy="25" r="15" fill="#095d29" stroke="#2d5a3d" strokeWidth="3" />
                    {/* Lightning Bolt (Electric Symbol) */}
                    <polygon points="0,-10 -8,5 0,5 -5,20 10,0 2,0 8,-15" fill="#095d29" />
                  </g>
                  
                  {/* Circuit Pattern (Technology) */}
                  {/* Top Circuit */}
                  <line x1="100" y1="80" x2="150" y2="80" stroke="#2d5a3d" strokeWidth="2" />
                  <circle cx="150" cy="80" r="5" fill="#095d29" />
                  <line x1="150" y1="80" x2="150" y2="120" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Right Circuit */}
                  <line x1="320" y1="160" x2="320" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  <circle cx="320" cy="200" r="5" fill="#095d29" />
                  <line x1="280" y1="200" x2="320" y2="200" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Bottom Circuit */}
                  <line x1="100" y1="280" x2="150" y2="280" stroke="#2d5a3d" strokeWidth="2" />
                  <circle cx="100" cy="280" r="5" fill="#095d29" />
                  <line x1="100" y1="240" x2="100" y2="280" stroke="#2d5a3d" strokeWidth="2" />
                  
                  {/* Charging Station Symbol */}
                  <g transform="translate(320, 100)">
                    <rect x="-15" y="0" width="30" height="50" fill="#2d5a3d" rx="3" />
                    <rect x="-10" y="5" width="20" height="15" fill="#095d29" />
                    <polygon points="0,25 -5,35 0,35 -3,45 7,30 2,30 5,20" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Focus Areas */}
        <section className="py-12 md:py-16 section-green border-t border-border">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#ffffff'}}>2.</span>Focus Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Electric Mobility */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredArea('mobility')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Electric Mobility
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === 'mobility' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Assessment of electric vehicle adoption, charging infrastructure, supply chain development, and policy frameworks. We support institutional planning for Pakistan's electric mobility transition.
                  </p>
                </div>
              </div>

              {/* Technology Pilot Programs */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredArea('pilot')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Technology Pilot Programs
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === 'pilot' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Research support and feasibility assessment for pilot initiatives in emerging technologies. We help institutional stakeholders understand implementation requirements and scalability pathways.
                  </p>
                </div>
              </div>

              {/* Industrial Technology Integration */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredArea('industrial')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Industrial Technology Integration
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === 'industrial' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Assessment of technology adoption in industrial sectors, supply chain optimization, and productivity enhancement. We support long-term industrial planning and competitiveness.
                  </p>
                </div>
              </div>

              {/* Research and Analysis */}
              <div 
                className="card-institutional transition-all hover:shadow-lg" 
                style={{backgroundColor: '#095d29'}}
                onMouseEnter={() => setHoveredArea('research')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4" style={{color: '#ffffff'}}>
                  Research and Analysis
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredArea === 'research' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground" style={{color: '#c8bfb6'}}>
                    Market research, technology benchmarking, and comparative analysis supporting institutional decision-making regarding technology adoption and investment priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Long-Term Outlook */}
        <section className="py-12 md:py-16 section-cream border-t border-border">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Long-Term Institutional Planning
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* Text Content */}
              <div>
                <p className="text-body mb-6">
                  Our technology work is framed within long-term institutional planning horizons. We support government bodies and strategic partners in developing comprehensive strategies that integrate technology adoption with industrial development, resource management, and policy frameworks.
                </p>
                <p className="text-body">
                  We emphasize realistic assessment of implementation timelines, institutional capacity requirements, and resource commitments. Our recommendations are structured to support evidence-based institutional decision-making and long-term strategic planning.
                </p>
              </div>

              {/* SVG Diagram - Timeline/Planning Visual */}
              <div className="flex items-center justify-center">
                <svg 
                  viewBox="0 0 480 300" 
                  className="w-full max-w-lg h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Timeline Arrow */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#095d29" />
                    </marker>
                  </defs>
                  <line x1="60" y1="150" x2="420" y2="150" stroke="#2d5a3d" strokeWidth="3" markerEnd="url(#arrowhead)" />
                  
                  {/* Phase 1: Assessment */}
                  <circle cx="90" cy="150" r="25" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <text x="90" y="155" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">1</text>
                  <text x="90" y="195" fontSize="13" fill="#2d5a3d" textAnchor="middle" fontWeight="600">Assessment</text>
                  
                  {/* Phase 2: Strategy */}
                  <circle cx="180" cy="150" r="25" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <text x="180" y="155" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">2</text>
                  <text x="180" y="195" fontSize="13" fill="#2d5a3d" textAnchor="middle" fontWeight="600">Strategy</text>
                  
                  {/* Phase 3: Integration */}
                  <circle cx="280" cy="150" r="25" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <text x="280" y="155" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">3</text>
                  <text x="280" y="195" fontSize="13" fill="#2d5a3d" textAnchor="middle" fontWeight="600">Integration</text>
                  
                  {/* Phase 4: Implementation */}
                  <circle cx="390" cy="150" r="25" fill="#095d29" stroke="#2d5a3d" strokeWidth="2" />
                  <text x="390" y="155" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">4</text>
                  <text x="390" y="195" fontSize="13" fill="#2d5a3d" textAnchor="middle" fontWeight="600">Implementation</text>
                  
                  {/* Top Labels */}
                  <text x="90" y="95" fontSize="10" fill="#6b7280" textAnchor="middle">Capacity</text>
                  <text x="90" y="108" fontSize="10" fill="#6b7280" textAnchor="middle">Analysis</text>
                  
                  <text x="180" y="95" fontSize="10" fill="#6b7280" textAnchor="middle">Policy</text>
                  <text x="180" y="108" fontSize="10" fill="#6b7280" textAnchor="middle">Framework</text>
                  
                  <text x="280" y="95" fontSize="10" fill="#6b7280" textAnchor="middle">Technology</text>
                  <text x="280" y="108" fontSize="10" fill="#6b7280" textAnchor="middle">Adoption</text>
                  
                  <text x="390" y="95" fontSize="10" fill="#6b7280" textAnchor="middle">Long-term</text>
                  <text x="390" y="108" fontSize="10" fill="#6b7280" textAnchor="middle">Execution</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-14 section-light border-t border-border">
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
