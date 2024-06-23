<script lang="ts">
	import { onMount } from 'svelte';
	import { getAssetUrl } from '$lib/utils/directus';

	export let src: string;
	export let alt: string;

	let loaded = false;
	let thisImage;
	let imageSrc: string;

	onMount(() => {
		const screenWidth = window.innerWidth;
		imageSrc =
			screenWidth < 768
				? getAssetUrl(src, '?width=400&format=auto')
				: getAssetUrl(src, '?width=768&format=auto');

		thisImage.onload = () => {
			loaded = true;
		};
	});

	function getDefault() {
		src = '$lib/images/logo_white.avif';
	}
</script>

<img
	src={imageSrc}
	{alt}
	loading="lazy"
	class:loaded
	bind:this={thisImage}
	on:error={() => getDefault()} />

<style lang="scss">
	img {
		width: 200px;
		opacity: 0;
		transition: opacity 1000ms ease-out;
		pointer-events: none;
		&.loaded {
			opacity: 1;
		}
	}
</style>
