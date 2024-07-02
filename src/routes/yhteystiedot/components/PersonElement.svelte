<script lang="ts">
	import type { Person } from '$lib/types/common';

	export let person: Person;
</script>

<div class="person">
	<div class="info">
		<p class="name">{person.name}</p>
		<p class="job">{person.jobs}</p>
	</div>
</div>

<style>
	.person {
		display: flex;
		flex-direction: column;
		padding-bottom: 0rem;
		padding-top: 0rem;

		& .info {
			text-align: center;

			& .name {
				font-size: 1.5rem;
				font-weight: 700;
				margin-bottom: 0.4rem;
			}

			& .job {
				font-size: 1.3rem;
				line-height: 1.6rem;
				display: flex;
				align-items: center;
				justify-content: center;
				min-height: 1.5rem;
			}

			& p {
				line-height: 24px;
				margin: 0;
			}
		}
	}

	@media (max-width: 768px) {
		.job {
			min-height: 3rem;
		}
	}
</style>
