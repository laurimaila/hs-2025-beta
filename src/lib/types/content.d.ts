export type SinglePageContent = {
    title: string,
    contentHTML?: string,
    bannerUrl?: string,
} | null;

export type NavigationItem = {
    id: number,
    title: string,
    href: string
};

export type ContactItem = {
    email: string,
    IBAN: string
    yTunnus: string,
    address: string,
} | null;
