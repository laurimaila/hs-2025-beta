<script lang="ts">
	import { onMount } from 'svelte';
	import { getAssetUrl } from '$lib/utils/directus';
	import type { GalleryImage } from '$lib/types/production.d.ts';
	import BiggerPicture from 'bigger-picture';
	import './bigger-picture.css';

	export let images: GalleryImage[] = [];
	export let id: number;

	let bp;
	let imageLinks;

	const setupGallery = () => {
		bp = BiggerPicture({
			target: document.body
		});

		// Bigger Picture - grab image links
		const testi = `#gallery_${id} > a`;
		imageLinks = document.querySelectorAll(testi);
		imageLinks.forEach((imageLink) => {
			imageLink.addEventListener('click', openGallery);
		});
	};

	function openGallery(e) {
		e.preventDefault();
		bp.open({
			items: imageLinks,
			el: e.currentTarget,
			maxZoom: 4
		});
	}

	onMount(() => {
		setupGallery();
	});
</script>

<div id="gallery_{id}" class="container">
	{#if images}
		{#each images as image}
			<a
				class="image-link"
				href="/"
				data-img={getAssetUrl(image?.directus_files_id, '?height=1920&format=auto')}>
				<img
					class="image"
					src={getAssetUrl(image?.directus_files_id, '?height=300&format=auto')}
					alt="Kuva vanhasta speksistä"
					loading="lazy" />
			</a>
		{/each}
	{/if}
</div>

<style lang="scss">
	.container {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0;
		margin: 0;
		padding: 1.25rem 1.25rem 2.5rem 1.25rem;
		@media only screen and (max-width: 768px) {
			grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		}
		@media only screen and (max-width: 480px) {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		}
	}

	.image-link {
		display: block;
		height: 200px;
		width: 100%;
		padding: 0;
		margin: 0;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		@media only screen and (max-width: 768px) {
			height: 180px;
		}
	}

	.image {
		width: 100% !important;
		height: 100%;
		object-fit: cover;
	}
</style>
