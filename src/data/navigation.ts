export const NAV_LINKS = [
    {
        href: "#home",
        label: "Home",
    },
    {
        href: '#about',
        label: 'About',
    },
    {
        href: '#skills',
        label: 'Skills',
    },
    {
        href: '#projects',
        label: 'Projects',
    },
    {
        href: '#experience',
        label: 'Experience',
    },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export type SectionId =
    NavLink['href'] extends `#${infer T}`
    ? T
    : never;

export type NavHref = `#${SectionId}`;
