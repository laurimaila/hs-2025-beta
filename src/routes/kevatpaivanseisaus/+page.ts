import { PUBLIC_WP_REST_API_URL, PUBLIC_WP_MEDIA_API_URL } from '$env/static/public'

import type { Sponsor } from '$lib/types/common'
import type { ApiSponsorResponse } from '$lib/types/wp-api'

export const load = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_WP_REST_API_URL}/sponsor?per_page=50`)

	if (res.ok) {
		try {
			const data: ApiSponsorResponse[] = await res.json()

			const sponsors: Sponsor[] = data.map(
				(item): Sponsor => ({
					id: item.id,
					name: item.acf.name,
					webpage: item.acf.webpage,
					logoUrl: `${PUBLIC_WP_MEDIA_API_URL}/${item.acf.logo}`,
					mainsponsor: item.acf.mainsponsor
				})
			)

			return { sponsors, title: 'Kevätpäivänseisaus' }
		} catch (e) {
			console.error('Error fetching sponsors data:', e)
		}
	}
}
