import { WP_REST_API_URL } from '$env/static/private';
import type { Production } from '$lib/types/common';
import type { ApiProductionResponse } from '$lib/types/wp-api';
import { redirect } from "@sveltejs/kit";
import he from 'he';

export const load = async ({ fetch }) => {
    const res = await fetch(`${WP_REST_API_URL}/production?acf_format=standard`)

    if (res.ok) {
        try {
            const data: ApiProductionResponse[] = await res.json();

            const productions: Production[] = data.map((item): Production => ({
                id: item.id.toString(),
                slug: item.slug,
                title: he.decode(item.title.rendered),
                year: item.acf.year,
                synopsis: item.acf.synopsis,
                performanceDates: item.acf.shows,
                statistics: Object.entries(item.acf.statistics).map(([key, value]) => ({ [key]: value })),
                colors: [item.acf.color1, item.acf.color2, item.acf.color3].filter(Boolean),
                posterUrl: item.acf.poster || undefined,
                bannerUrl: item.acf.banner || undefined,
            }));

            return { productions };

        } catch (e) {
            console.error('Error fetching productions data:', e);
            throw redirect(307, '.');
        }
    }
    throw redirect(307, '.');
};
