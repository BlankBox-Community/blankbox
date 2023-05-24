import { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Installation",
          href: "/docs/documentation",
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Introduction",
          href: "/docs/guides",
        },
        {
          title: "Components",
          href: "/docs/guides/components",
        },
        {
          title: "Code Blocks",
          href: "/docs/guides/code-blocks",
        },
      ],
    },
  ],
};
