import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

/**
 * Breadcrumb Navigation Component
 * Displays hierarchical navigation path below header
 * Institutional design with subtle styling
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
      <div className="container py-3">
        <ol className="flex items-center gap-2 text-sm">
          {/* Home link */}
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {items.length > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </li>

          {/* Dynamic breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </>
                ) : (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
