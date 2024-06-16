<script lang="ts">
	import type { Production } from '$lib/types/common';
	import { page } from '$app/stores';
	export let data;

	$: productionPath = $page.url.pathname;

	let productions: Production[] = data.productions || [];
	$: production = productions?.find(
		(prod) => prod.slug == productionPath.replace('/produktiot/', '')
	);

	if (!production) {
		console.error('Production not found');
	}
</script>

{#if production}
	<div class="production-details">
		<h1>{production.title}</h1>
		{#if production.synopsis}
			<div class="content">{@html production.synopsis}</div>
		{/if}
	</div>
{:else}
	<p>Loading...</p>
{/if}

<style>
	.production-details {
		padding: 2rem;
	}
</style>
