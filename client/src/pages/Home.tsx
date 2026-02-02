import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page - Refined Institutional Design
 * Enhanced visual hierarchy, section rhythm, contemporary typography
 * Abstract imagery for institutional credibility
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  
  // State for expandable sections
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedApproach, setExpandedApproach] = useState<string | null>(null);
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Full-Screen Hero Section with Background Image */}
        <section className="relative overflow-hidden min-h-[85vh] flex items-center border-b border-border">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: 'url(/images/hero-pakistan-mountains.jpg)'}}
          ></div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
          
          {/* Content */}
          <div className="container relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Building Pakistan's Resource and Industrial Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
                Strategic development across mining, consultancy, electric vehicles, and industrial technology.
              </p>
              <p className="text-lg text-gray-200 mb-12 max-w-2xl leading-relaxed">
                Resource Pakistan (Pvt) Ltd operates at the intersection of resource development, policy alignment, and long-term industrial planning. We work with government bodies, institutional stakeholders, and strategic partners to advance feasibility-driven projects that create sustainable value for Pakistan's economy.
              </p>
              <Link href="/about" className="inline-block px-10 py-4 bg-white text-slate-900 font-semibold text-lg transition-all hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Core Verticals - Circular Service Icons */}
        <section className="py-20 md:py-28 section-cream">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Core Verticals
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Multidisciplinary expertise across mining, consultancy, technology, and industrial planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Consultancy & Advisory */}
              <div 
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setExpandedService(expandedService === 'consultancy' ? null : 'consultancy')}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img 
                    src="/images/service-consultancy.jpg" 
                    alt="Consultancy & Advisory" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Consultancy & Advisory</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedService === 'consultancy' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic planning and advisory services for government bodies and institutional stakeholders.
                  </p>
                </div>
                {expandedService !== 'consultancy' && (
                  <p className="text-xs text-green-primary mt-2">Click to learn more</p>
                )}
              </div>

              {/* Mining & Resources */}
              <div 
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setExpandedService(expandedService === 'mining' ? null : 'mining')}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img 
                    src="/images/service-mining.jpg" 
                    alt="Mining & Resources" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Mining & Resources</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedService === 'mining' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Responsible mineral development through comprehensive feasibility studies and compliance-oriented planning.
                  </p>
                </div>
                {expandedService !== 'mining' && (
                  <p className="text-xs text-green-primary mt-2">Click to learn more</p>
                )}
              </div>

              {/* Electric Vehicles & Technology */}
              <div 
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setExpandedService(expandedService === 'ev' ? null : 'ev')}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img 
                    src="/images/service-ev-technology.jpg" 
                    alt="Electric Vehicles & Technology" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Electric Vehicles & Technology</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedService === 'ev' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Research-focused initiatives in electric mobility and emerging industrial technologies.
                  </p>
                </div>
                {expandedService !== 'ev' && (
                  <p className="text-xs text-green-primary mt-2">Click to learn more</p>
                )}
              </div>

              {/* Industrial Planning */}
              <div 
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setExpandedService(expandedService === 'industrial' ? null : 'industrial')}
              >
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-green-primary transition-all group-hover:border-green-light group-hover:shadow-2xl">
                  <img 
                    src="/images/service-industrial-planning.jpg" 
                    alt="Industrial Planning" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Industrial Planning</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedService === 'industrial' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multidisciplinary coordination across sectors with rigorous feasibility assessment.
                  </p>
                </div>
                {expandedService !== 'industrial' && (
                  <p className="text-xs text-green-primary mt-2">Click to learn more</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="py-20 md:py-28 section-green border-t border-white/20">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number" style={{color: '#eff0f1'}}>2.</span>Our Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feasibility-Driven Planning */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onClick={() => setExpandedApproach(expandedApproach === 'feasibility' ? null : 'feasibility')} style={{backgroundColor: '#095d29'}}
              >
                <h3 className="text-xl font-bold text-foreground mb-2" style={{color: '#ffffff'}}>Feasibility-Driven Planning</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedApproach === 'feasibility' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Every project begins with comprehensive feasibility assessment. We prioritize rigorous analysis over optimistic projections, ensuring recommendations withstand institutional scrutiny.
                  </p>
                </div>
                {expandedApproach !== 'feasibility' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>

              {/* Institutional Alignment */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onClick={() => setExpandedApproach(expandedApproach === 'institutional' ? null : 'institutional')} style={{backgroundColor: '#095d29'}}
              >
                <h3 className="text-xl font-bold text-foreground mb-2" style={{color: '#fafafa'}}>Institutional Alignment</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedApproach === 'institutional' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    We understand the complexity of working across government, policy, and private sectors. Our work is structured to support institutional decision-making processes.
                  </p>
                </div>
                {expandedApproach !== 'institutional' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>

              {/* Responsible Development */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onClick={() => setExpandedApproach(expandedApproach === 'responsible' ? null : 'responsible')} style={{backgroundColor: '#095d29'}}
              >
                <h3 className="text-xl font-bold text-foreground mb-2" style={{color: '#f5f5f4'}}>Responsible Development</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedApproach === 'responsible' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Resource development must balance economic opportunity with environmental and socio-economic considerations. We integrate compliance and sustainability into every engagement.
                  </p>
                </div>
                {expandedApproach !== 'responsible' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>

              {/* Multidisciplinary Expertise */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border hover:border-green-primary transition-all"
                onClick={() => setExpandedApproach(expandedApproach === 'multidisciplinary' ? null : 'multidisciplinary')} style={{backgroundColor: '#095d29'}}
              >
                <h3 className="text-xl font-bold text-foreground mb-2" style={{color: '#fafafa'}}>Multidisciplinary Expertise</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedApproach === 'multidisciplinary' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Mining, consultancy, technology, and industrial planning require diverse expertise. Our team brings together specialists across these domains.
                  </p>
                </div>
                {expandedApproach !== 'multidisciplinary' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Sectors */}
        <section className="py-20 md:py-28 section-cream border-t border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-heading">
                <span className="section-number">3.</span>Strategic Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Government Bodies & Policy Institutions */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onClick={() => setExpandedSector(expandedSector === 'government' ? null : 'government')}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">Government Bodies & Policy Institutions</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedSector === 'government' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground">
                    Advisory services, feasibility studies, and strategic planning support for institutional decision-making.
                  </p>
                </div>
                {expandedSector !== 'government' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>

              {/* Investors & Strategic Partners */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onClick={() => setExpandedSector(expandedSector === 'investors' ? null : 'investors')}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">Investors & Strategic Partners</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedSector === 'investors' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground">
                    Comprehensive due diligence, market assessment, and project evaluation for resource and industrial opportunities.
                  </p>
                </div>
                {expandedSector !== 'investors' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>

              {/* Industrial & Technology Sectors */}
              <div 
                className="cursor-pointer p-6 rounded-lg border border-border bg-card hover:border-green-primary transition-all"
                onClick={() => setExpandedSector(expandedSector === 'industrial' ? null : 'industrial')}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">Industrial & Technology Sectors</h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedSector === 'industrial' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-body text-muted-foreground">
                    Research support, technology assessment, and long-term planning for emerging industrial initiatives.
                  </p>
                </div>
                {expandedSector !== 'industrial' && (
                  <p className="text-xs text-green-primary mt-2">Click to expand</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 section-green border-t border-white/20">
          <div className="container text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" style={{color: '#f2f2f2'}}>
              For inquiries regarding feasibility studies, advisory services, or strategic partnerships, please contact us.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-green-primary font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
              Submit Inquiry
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
