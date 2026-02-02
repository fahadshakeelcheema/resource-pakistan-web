import { Link } from "wouter";

/**
 * Footer Component - Minimalist Institutional Design
 * Clean, professional footer with navigation and company information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Mining", href: "/mining" },
    { label: "Consultancy", href: "/consultancy" },
    { label: "EVs & Technology", href: "/technology" },
    { label: "Governance", href: "/governance" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="container py-16">
        {/* Top Row: Logo, Navigation, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Logo */}
          <div>
            <img src="/images/resource-pakistan-logo.png" alt="Resource Pakistan" className="h-32 w-auto mb-4" style={{marginLeft: '70px', width: '300px', height: '240px'}} />
            <p className="text-xs text-muted-foreground leading-relaxed" style={{textAlign: 'center'}}>
              Strategic development across mining, consultancy, electric vehicles, and industrial technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Resource Pakistan (Pvt) Ltd</p>
              <p>Pakistan</p>
              <Link href="/contact">
                <span className="text-primary hover:underline inline-block">Send Inquiry</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Organizations - Bottom Section */}
        <div className="border-t border-border pt-12 mb-12">
          <h4 className="text-sm font-bold text-foreground mb-8 uppercase tracking-wider text-center">Partner Organizations</h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="/images/irada-logo.png" alt="Irada Pakistan" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/ministry-science-technology-logo.png" alt="Ministry of Science and Technology" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/ctti-logo.png" alt="CTTI" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/navtech-logo.png" alt="NAvtech" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/huawei-logo.png" alt="Huawei" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/aiib-logo.png" alt="AIIB" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="text-center text-xs text-muted-foreground">
            <p>© {currentYear} Resource Pakistan (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
