import React, { createContext, useContext, useState, useEffect } from "react";

export type PageId = "home" | "how-it-works" | "tech" | "about" | "download" | "comparison" | "not-found" | "roadmap" | "privacy" | "terms";

interface NavigationContextValue {
  activePage: PageId;
  navigateTo: (page: PageId, anchorId?: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

function resolvePageFromPath(path: string): PageId {
  const base = import.meta.env.BASE_URL || "/";
  const stripped = path.startsWith(base) ? path.slice(base.length - 1) : path;
  const normalized = stripped.replace(/\/+$/, "") || "/";
  if (normalized === "/" || normalized === "/index.html") return "home";
  if (normalized === "/how-it-works") return "how-it-works";
  if (normalized === "/tech") return "tech";
  if (normalized === "/about") return "about";
  if (normalized === "/download") return "download";
  if (normalized === "/comparison") return "comparison";
  if (normalized === "/roadmap") return "roadmap";
  if (normalized === "/privacy") return "privacy";
  if (normalized === "/terms") return "terms";
  return "not-found";
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<PageId>(() => {
    const saved = sessionStorage.getItem("redirect");
    if (saved) {
      sessionStorage.removeItem("redirect");
      return resolvePageFromPath(saved);
    }
    return resolvePageFromPath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(resolvePageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (page: PageId, anchorId?: string) => {
    setActivePage(page);
    const base = import.meta.env.BASE_URL || "/";
    const path = page === "home" ? base : `${base}${page}`;
    
    // Update browser history
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }

    // Scroll to anchor or top of the page
    setTimeout(() => {
      if (anchorId) {
        let retries = 0;
        const findAndScroll = () => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            return true;
          }
          return false;
        };

        if (!findAndScroll()) {
          const interval = setInterval(() => {
            retries++;
            if (findAndScroll() || retries > 15) {
              clearInterval(interval);
            }
          }, 50);
        }
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ activePage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return ctx;
}
