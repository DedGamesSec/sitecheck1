import type { PageId } from "./NavigationContext";
import { pageNames } from "../i18n/dicts/pageNames";

export interface PageConfig {
  id: PageId;
  labelKey: keyof typeof pageNames.en;
  order: number;
  showInHeader: boolean;
  showInFooterSitemap: boolean;
}

export const PAGES_CONFIG: PageConfig[] = [
  {
    id: "home",
    labelKey: "home",
    order: 1,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "how-it-works",
    labelKey: "how-it-works",
    order: 2,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "tech",
    labelKey: "tech",
    order: 3,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "roadmap",
    labelKey: "roadmap",
    order: 4,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "about",
    labelKey: "about",
    order: 5,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "comparison",
    labelKey: "comparison",
    order: 6,
    showInHeader: true,
    showInFooterSitemap: true,
  },
  {
    id: "download",
    labelKey: "download",
    order: 7,
    showInHeader: true,
    showInFooterSitemap: true,
  },
];

export const ORDERED_PAGES = [...PAGES_CONFIG].sort((a, b) => a.order - b.order);
export const HEADER_PAGES = ORDERED_PAGES.filter((page) => page.showInHeader);
export const FOOTER_SITEMAP_PAGES = ORDERED_PAGES.filter((page) => page.showInFooterSitemap);
