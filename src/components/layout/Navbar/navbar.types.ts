export interface NavItem {
    href: string;
    label: string;
}

export interface NavbarLogoProps {
    onClick: () => void;
}

export interface NavbarLinksProps {
    links: readonly NavItem[];
    activeSection: string | null;
    onNavigate: (href: string) => void;
    mobile?: boolean;
}

export interface ThemeToggleProps {
    className?: string;
}