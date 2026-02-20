import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Header Component - Institutional Design with Smart Scroll Behavior
 * Blue background with white text for better readability
 * Hides on scroll down, shows on scroll up
 * Features Sectors dropdown menu with robust hover behavior
 * 
 * Dropdown uses a timeout-based approach combined with an invisible bridge
 * element to prevent the menu from closing when the mouse moves from the
 * button to the dropdown panel.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user } = useAuth();
  const [location] = useLocation();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
  ];

  const sectorItems = [
    { label: "Consultancy & Advisory", href: "/consultancy" },
    { label: "Mining & Resources", href: "/mining" },
    { label: "EVs & Technology", href: "/technology" },
  ];

  const otherNavItems = [
    { label: "Governance", href: "/governance" },
    { label: "Contact", href: "/contact" },
  ];

  const isSectorActive = sectorItems.some(item => location === item.href);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setSectorsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setSectorsDropdownOpen(false);
    }, 200); // 200ms grace period
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-sectors-dropdown]')) {
        setSectorsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setSectorsDropdownOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`border-b border-border/20 sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "#273444" }}
    >
      <div className="container py-6 flex items-center justify-between">
        {/* Logo / Company Name */}
        <Link href="/" className="flex items-center gap-3 no-underline hover:no-underline">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029222690/NwHKdWUDVEbPtaGq.png"
            alt="Resource Pakistan"
            className="h-auto"
            style={{ width: "140px", height: "auto", imageRendering: "crisp-edges" }}
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-white border-b-2 border-white font-semibold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Sectors Dropdown - uses timeout + invisible bridge for robust hover */}
          <div
            className="relative"
            data-sectors-dropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSectorsDropdownOpen(prev => !prev);
              }}
              className={`text-base font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                isSectorActive
                  ? "text-white border-b-2 border-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Sectors
              <ChevronDown size={16} className={`transition-transform ${sectorsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Invisible bridge: fills the gap between button and dropdown panel */}
            {sectorsDropdownOpen && (
              <div
                className="absolute left-0 w-full z-50"
                style={{ top: "100%", height: "12px" }}
              />
            )}

            {/* Dropdown panel */}
            {sectorsDropdownOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-56 z-50"
                style={{ top: "calc(100% + 8px)" }}
              >
                <div className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-100">
                  {sectorItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setSectorsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {otherNavItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-white border-b-2 border-white font-semibold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="text-base font-medium text-white/90 transition-colors hover:text-white"
            >
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/20" style={{ backgroundColor: "#273444" }}>
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    isActive ? "text-white font-bold" : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Sectors Dropdown */}
            <div>
              <button
                onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                className={`text-base font-medium transition-colors flex items-center gap-1 w-full ${
                  isSectorActive ? "text-white font-bold" : "text-white/90 hover:text-white"
                }`}
              >
                Sectors
                <ChevronDown size={16} className={`transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectorsOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {sectorItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileSectorsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherNavItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    isActive ? "text-white font-bold" : "text-white/90 hover:text-white"
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
                className="text-base font-medium text-white/90 transition-colors hover:text-white"
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
