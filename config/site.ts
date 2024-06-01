export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Techladies",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Volunteer",
      href: "/volunteer",
    },
  ],
  links: {
    twitter: "https://twitter.com/techladiescode",
    facebook: "https://www.facebook.com/TechLadies",
    linkedin: "https://www.linkedin.com/company/techladies/",
    instagram: "https://www.instagram.com/techladiescode/",
    eventbrite: "",
  },
};
