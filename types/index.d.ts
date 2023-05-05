export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  authors: string[{ name: string; url: string }];
  creator: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};
