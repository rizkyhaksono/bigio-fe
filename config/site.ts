export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Story",
      href: "/story",
    },
		{
			label: "Backend",
			href: "https://bigio-be-production.up.railway.app"
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Story",
      href: "/story",
    },
	],
	links: {
		github: "https://github.com/rizkyhaksono"
	},
};
