<script lang="ts">
	import type { Person } from '$lib/types/common'
	import { getProductionYear } from '$lib/utils/timeUtils'
	import PersonElement from './PersonElement.svelte'
	import logoWh from '$lib/images/logo_white.avif'
	import logoBl from '$lib/images/logo_black.avif'

	export let peopleGroup: Person[]
	export let type: string
	export let index: number

	let productionYear = getProductionYear()

	switch (type) {
		case 'toimihenkilo':
			type = 'toimihenkilöt'
			break
		case 'hallitus':
			type += ` ${productionYear - 1}–${productionYear}`
			break
		case 'tuotantotiimi':
			type += ` ${productionYear}`
			break
	}

	// Vara- ja apulaishenkilöt aakkostetaan ilman etuliitteitä
	function removePrefixes(title: string): string {
		return title.replace(/^(apulais|apu|vara)/i, '')
	}

	// Järjestää päävastaavan ensin
	function primaryCorrespondantFirst(arr: Person[]) {
		for (let i = 1; i < arr.length; i++) {
			if (
				arr[i - 1].title.toUpperCase().includes(arr[i].title.toUpperCase()) &&
				arr[i - 1].title != arr[i].title
			) {
				let temp = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = temp
			}
		}
		return arr
	}

	// @ts-ignore
	peopleGroup.sort((a, b) => {
		if (typeof a.order != 'number' && typeof b.order != 'number') {
			return removePrefixes(a.title).localeCompare(removePrefixes(b.title))
		} else if (typeof a.order !== 'number') {
			return 1
		} else if (typeof b.order !== 'number') {
			return -1
		} else if (a.order < b.order) {
			return -1
		}
	})

	peopleGroup = primaryCorrespondantFirst(peopleGroup)

	let logo: string
	logo = index % 2 == 0 ? logoWh : logoBl
</script>

<div class="people index-{index % 2}">
	<div class="wrap">
		<h2 class="type">{type}</h2>
		<div class="flex-row">
			{#each peopleGroup as person}
				<div class="person">
					<PersonElement {person} {logo} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.people {
		padding-top: 0rem;
		padding-bottom: 1rem;
	}

	.index-0 {
		background-color: rgba(var(--black-rgb), 0.6);
		color: var(--white-hex);
	}

	.index-1 {
		background-color: rgba(var(--white-rgb), 1);
		color: var(--black-hex);
	}

	.flex-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		flex-direction: row;
		@media (max-width: 768px) {
			justify-content: center;
		}
	}

	.person {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		flex: 0 0 20rem;
	}

	.type {
		text-transform: capitalize;
		text-align: center;
		padding-top: 3rem;
		padding-bottom: 4rem;
		margin: 0;
	}
</style>
