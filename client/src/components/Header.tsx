import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Header Component - Minimalist Institutional Design
 * Clean navigation with company name and section links
 * No animations, instant state changes
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const [location] = useLocation();

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
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container py-6 flex items-center justify-between">
        {/* Logo / Company Name */}
        <Link href="/" className="flex items-center gap-3 no-underline hover:no-underline">
          <img src="/images/resource-pakistan-logo.png" alt="Resource Pakistan" className="h-16 w-auto" style={{width: '140px', height: '90px'}} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {user?.role === "admin" && (
            <Link href="/admin" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-bold' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            {user?.role === "admin" && (
              <Link
                href="/admin"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
