import { WP_REST_API_URL } from '$env/static/private';
import { error } from '@sveltejs/kit'
import type { SinglePageContent } from '$lib/types/content'

/** @type {import('./$types').PageLoad} */
export const load = async ({ params, fetch }) => {
	const { slug } = params

	let res: Response
	try {
		res = await fetch(
			`${WP_REST_API_URL}/pages?slug=${slug}&acf_format=standard`
		)
	} catch (e) {
		console.error('Error fetching page by slug:', e instanceof Error ? e.message : '')
		error(404, {
			message: 'Sivua ei löytynyt :('
		})
	}

	const data = await res.json()

	const pageData = data.length > 0 ? data[0] : null

	const returnPageData: SinglePageContent = {
		title: pageData.title?.rendered,
		contentHTML: pageData.content.rendered,
		bannerUrl: pageData.acf.banner_image
	}

	return returnPageData
}
