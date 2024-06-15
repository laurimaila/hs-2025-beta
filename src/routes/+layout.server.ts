import { WP_REST_API_URL } from '$env/static/private';
import type { NavigationItem, ContactItem } from '$lib/types/content';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {

    const res = await fetch(`${WP_REST_API_URL}/navi`)

    const navigationData = await res.json();

    let nodes: NavigationItem[];

    if (navigationData.length == 0) {
        console.error('Error fetching navigation:', navigationData.errors);
        nodes = [];
    } else {
        nodes = navigationData;
    }

    const res2 = await fetch(`${WP_REST_API_URL}/address`)

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
        }
    }

    return {
        nodes: nodes,
        address: address
    };
}
