import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Mining from "./pages/Mining";
import Consultancy from "./pages/Consultancy";
import Technology from "./pages/Technology";
import Governance from "./pages/Governance";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";

function Router() {
  // make sure to consider if you need authentication for certain routes
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/mining"} component={Mining} />
      <Route path={"/consultancy"} component={Consultancy} />
      <Route path={"/technology"} component={Technology} />
      <Route path={"/governance"} component={Governance} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - Minimalist Institutional Design: Light background (off-white), dark text, deep slate blue accents
// - Typography: Crimson Text (serif) for display, Source Sans Pro (sans-serif) for body
// - No animations, instant state changes, minimal visual effects
// - Suitable for government and institutional stakeholders

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
