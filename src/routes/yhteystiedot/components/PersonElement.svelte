<script lang="ts">
	import type { Person } from '$lib/types/common'

	export let person: Person
	export let logo
</script>

<div class="person">
	<img
		class={person.imageUrl ? 'custom-img' : ''}
		src={person.imageUrl ? person.imageUrl : logo}
		alt="picture of {person.name}" />
	<div class="info">
		<p class="name">{person.name}</p>
		<p class="job">{person.jobs}</p>
	</div>
</div>

<style>
	.person {
		display: flex;
		flex-direction: column;
		padding-bottom: 1rem;
		padding-top: 0rem;

		& img {
			width: 6rem;
			margin: 0 auto 1rem auto;
		}

		& .info {
			text-align: center;

			& .name {
				font-size: 1.2rem;
				margin-bottom: 1rem;
			}

			& .job {
				font-weight: 700;
				font-size: 1.5rem;
				line-height: 2rem;
				padding-bottom: 1.25rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			& p {
				line-height: 24px;
				margin: 0;
			}
		}
	}

	@media (max-width: 768px) {
		.job {
			min-height: 3rem !important;
		}
	}

	.custom-img {
		border-radius: 50%;
	}
</style>
