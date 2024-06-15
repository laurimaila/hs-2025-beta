<script lang="ts">
	import Navbar from '$lib/components/Navigation/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { page } from '$app/stores'
	import '$styles/app.scss'
</script>

<svelte:head>
	<title
		>{$page.data?.page?.title
			? 'Hybridispeksi - ' + $page.data.page.title
			: 'Hybridispeksi'}</title>
</svelte:head>

<Navbar />
<div>
	<slot />
</div>
<Footer />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	/* Global CSS variables*/
	:global(:root) {
		--white-hex: #d9d9d9;
		--gray-hex: #727272;
		--black-hex: #0e0e0e;
		--white-rgb: 217, 217, 217;
		--gray-rgb: 114, 114, 114;
		--black-rgb: 14, 14, 14;
		--navbar-bg: rgba(var(--black-rgb), 0.6);
		--navbutton-bg: rgba(var(--black-rgb), 0.85);
		--navbutton-bg-sidebar: transparent;
		--sidebar-bg: rgba(var(--black-rgb), 0.95);
	}
</style>
