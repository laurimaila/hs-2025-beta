export const prerender = true;

import { WP_REST_API_URL, DIRECTUS_API_URL } from '$env/static/private';
import type { ApiNavigations, NavigationItem, ContactItem } from '$lib/types/content';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
	const res = await fetch(`${DIRECTUS_API_URL}/items/navigations`);

	const navData: ApiNavigations = await res.json();

	let links: NavigationItem[];

	if (navData.data.items.length < 1) {
		console.error('Error fetching navigations');
		links = [];
	} else {
		links = navData.data.items;
	}

	const res2 = await fetch(`${WP_REST_API_URL}/address`);

	const addressData = await res2.json();

	let address: ContactItem;

	if (!addressData || addressData.errors || addressData.length != 1) {
		console.error('Error fetching address:', addressData.errors);
		address = null;
	} else {
		address = {
			email: addressData[0].acf.sahkopossti,
			IBAN: addressData[0].acf.tilinnumero,
			yTunnus: addressData[0].acf['y-tunnus'],
			address: addressData[0].acf.osoite
		};
	}

	return {
		nodes: links,
		address: address
	};
};
