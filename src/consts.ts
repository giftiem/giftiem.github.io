import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Gift Mphuthi",
  DESCRIPTION: "Software Engineer - AI, backend, agentic systems",
  EMAIL: "mphuthigift764@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software Engineer - AI, backend, agentic systems",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Notes on agent architectures, backend systems, and engineering decisions.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Production systems and case studies.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/giftiem",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/gift-mphuthi/",
  },
];
