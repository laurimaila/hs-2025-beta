export type SinglePageContent = {
	title: string;
	contentHTML?: string;
	bannerUrl?: string;
} | null;

export type ContactItem = {
	email: string;
	IBAN: string;
	yTunnus: string;
	address: string;
} | null;

export type NavigationItem = {
    id: number;
	title: string;
	link: string;
};

type NavigationData = {
	id: number;
	date_created: string;
	date_updated: string | null;
	items: NavigationItem[];
};

export type ApiNavigations = {
	data: NavigationData;
};
