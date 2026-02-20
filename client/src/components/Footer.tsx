import { Link } from "wouter";

/**
 * Footer Component - Compact Institutional Design
 * Simplified footer with company branding and partner logos
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-8">
      <div className="container py-4">
        {/* Company Info - Compact */}
        <div className="flex flex-col items-center text-center mb-3">
          <img src="/images/resource-pakistan-logo.png" alt="Resource Pakistan" className="h-20 w-auto mb-2" />
          <p className="text-sm text-muted-foreground max-w-md">
            Building Pakistan's resource and industrial future through strategic development.
          </p>
        </div>

        {/* Partner Organizations - No dividing line */}
        <div className="pt-2 mb-3">
          <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider text-center">Partner Organizations</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img src="/images/irada-logo.png" alt="Irada Pakistan" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/ministry-science-technology-logo.png" alt="Ministry of Science and Technology" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/ctti-logo.png" alt="CTTI" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/navtech-logo.png" alt="NAvtech" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/huawei-logo.png" alt="Huawei" className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/partners/aiib-logo.png" alt="AIIB" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="pt-3 mt-3 border-t border-border flex justify-center">
          <p className="text-xs text-muted-foreground">© {currentYear} Resource Pakistan (Pvt) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
