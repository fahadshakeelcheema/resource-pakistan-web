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
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Logo */}
          <div>
            <img src="/images/resource-pakistan-logo.png" alt="Resource Pakistan" className="h-32 w-auto mb-4" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Strategic development across mining, consultancy, electric vehicles, and industrial technology.
            </p>
          </div>

          {/* Partner Organization */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Partner Organization</h4>
            <img src="/images/irada-logo.png" alt="Irada Pakistan" className="h-24 w-auto" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </a>
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
                <a className="text-primary hover:underline">Send Inquiry</a>
              </Link>
            </div>
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
