<script lang="ts">
	import type { Production } from '$lib/types/common'
	export let productions: Production[]
	export let minimized: Boolean
</script>

<div class="timeline scroll-hide class:minimized={minimized}">
	{#each productions as prod, index}
		<a
			class="timeline-item {index % 2 === 0 ? 'left' : 'right'}"
			href={`/produktiot/${prod.slug}`}>
			<div class="poster">
				<img src={prod.posterUrl} alt={prod.title} />
			</div>
			<div class="details">
				<h2>{prod.title}</h2>
				<span class="year">{prod.year}</span>
			</div>
		</a>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 1000px;
		position: relative;
		padding-bottom: 2rem;
		padding-top: 2rem;
		height: 100%; /* Ensure the timeline takes full height */
		overflow-y: auto; /* Allow the timeline to scroll */
		margin: 0 auto;
	}

	.timeline.minimized {
		width: 1000rem;
		overflow-y: hidden;
		background-color: pink;
	}

	.timeline-item {
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
		align-items: center;
		margin-bottom: -9rem;
		text-decoration: none;
		color: inherit;
		width: 100%;
		max-width: 22rem;
		position: relative;
		z-index: 1;
	}

	.timeline-item:last-of-type {
		margin-bottom: 1rem;
	}

	.timeline-item.left {
		align-self: flex-start;
		padding-left: 1rem;
	}

	.timeline-item.right {
		align-self: flex-end;
		padding-right: 1rem;
	}

	.poster {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
	}

	.poster img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.details {
		text-align: center;
	}

	.details h2 {
		margin: 1rem 0 0.5rem;
		padding: 0;
		font-size: 1.5rem;
	}

	.details .year {
		font-size: 1.5rem;
		color: var(--white-hex);
	}

	.scroll-hide {
		width: 100%;
		overflow: auto;
		/* this will hide the scrollbar in mozilla based browsers */
		overflow: -moz-scrollbars-none;
		scrollbar-width: none;
		/* this will hide the scrollbar in internet explorers */
		-ms-overflow-style: none;
	}

	/* this will hide the scrollbar in webkit based browsers - safari, chrome, etc */
	.scroll-hide::-webkit-scrollbar {
		width: 0 !important;
		display: none;
	}

	@media (max-width: 810px) {
		.timeline-item {
			margin-bottom: 3rem;
		}
		.timeline-item.left,
		.timeline-item.right {
			align-self: center;
		}
	}
</style>
