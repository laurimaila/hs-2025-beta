export const prerender = true;

import { WP_REST_API_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { SinglePageContent } from '$lib/types/content';

function getSlug(href: string): string | undefined {
	const segments = new URL(href).pathname.split('/');
	const last = segments.pop() || segments.pop();
	return last;
}

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, fetch }) => {
	const slug = getSlug(url.href);

	let res: Response;
	try {
		res = await fetch(`${WP_REST_API_URL}/pages?&acf_format=standard&slug=${slug}`);
	} catch (e) {
		console.error('Error fetching page by slug:', e instanceof Error ? e.message : '');
		error(404, {
			message: `Sivua ${slug} ei löytynyt :(`
		});
	}

	const data = await res.json();

	const pageData = data.length > 0 ? data[0] : null;

	const returnPageData: SinglePageContent = {
		title: pageData?.title.rendered,
		contentHTML: pageData?.content.rendered,
		bannerUrl: pageData?.acf.banner_image
	};

	return returnPageData;
};
