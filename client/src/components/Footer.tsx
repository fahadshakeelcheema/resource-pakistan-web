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
    <footer className="bg-background border-t border-border mt-16">
      <div className="container py-12">
        {/* Top Row: Enhanced 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <img src="/images/resource-pakistan-logo.png" alt="Resource Pakistan" className="h-24 w-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building Pakistan's resource and industrial future through strategic development.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Core Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/mining">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  Mining & Resources
                </span>
              </Link>
              <Link href="/consultancy">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  Consultancy & Advisory
                </span>
              </Link>
              <Link href="/technology">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  EVs & Technology
                </span>
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  About Us
                </span>
              </Link>
              <Link href="/governance">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  Governance
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Get in Touch</h4>
            <div className="text-sm text-muted-foreground space-y-3">
              <p className="font-medium text-foreground">Resource Pakistan (Pvt) Ltd</p>
              <p>Pakistan</p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 text-primary hover:underline">
                  Send Inquiry →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Organizations - Bottom Section */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider text-center">Partner Organizations</h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="/images/irada-logo.png" alt="Irada Pakistan" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/ministry-science-technology-logo.png" alt="Ministry of Science and Technology" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/ctti-logo.png" alt="CTTI" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/navtech-logo.png" alt="NAvtech" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/huawei-logo.png" alt="Huawei" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/aiib-logo.png" alt="AIIB" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
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
