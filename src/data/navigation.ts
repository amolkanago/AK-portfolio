export const NAV_LINKS = [
    {
        href: '#about',
        label: 'About',
    },
    {
        href: '#skills',
        label: 'Skills',
    },
    {
        href: '#experience',
        label: 'Experience',
    },
    {
        href: '#projects',
        label: 'Projects',
    },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export type SectionId =
    NavLink['href'] extends `#${infer T}`
    ? T
    : never;

export type NavHref = `#${SectionId}`;