<script>
	import { getAssetUrl } from '$lib/utils/directus';
	export let src;
	export let alt;

	import { onMount } from 'svelte';

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});

	function getDefault() {
		src = '$lib/images/logo_white.avif';
	}
</script>

<img
	src={getAssetUrl(src) + '?width=1080&format=avif'}
	{alt}
	loading="lazy"
	class:loaded
	bind:this={thisImage}
	on:error={() => getDefault()} />

<style lang="scss">
	img {
		width: 200px;
		opacity: 0;
		transition: opacity 1200ms ease-out;
		pointer-events: none;
		&.loaded {
			opacity: 1;
		}
	}
</style>
