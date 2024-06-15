import type { ParamMatcher } from '@sveltejs/kit'

export const match = ((param) => {
	return /^((songs)|(song)|(laulut)|(laulu)|(sanat)|(laulukirja))$/.test(param)
}) satisfies ParamMatcher
