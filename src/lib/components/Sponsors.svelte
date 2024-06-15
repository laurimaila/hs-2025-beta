<script lang="ts">
	import type { Sponsor } from '$lib/types/common'

	export let sponsors: Sponsor[]

	function openLink(url: string) {
		window.open(url, '_blank')
	}

	function getMainSponsorHeading() {
		return sponsors.filter((sponsor) => sponsor.mainsponsor).length > 1
			? 'pääyhteistyökummanit'
			: 'Pääyhteistyökumppani'
	}

	function hasMainSponsors() {
		return sponsors.some((sponsor) => sponsor.logoUrl && sponsor.logoUrl && sponsor.mainsponsor)
	}

	function hasRegularSponsors() {
		return sponsors.some(
			(sponsor: Sponsor) => sponsor.logoUrl && !sponsor.mainsponsor
		)
	}
</script>

<div class="all-sponsors-container">
	{#if hasMainSponsors()}
		<h2 class="center main-sponsor-heading">{getMainSponsorHeading()}</h2>
		<div class="main-sponsors-container sponsors-container">
			{#each sponsors as sponsor}
				{#if sponsor.logoUrl && sponsor.mainsponsor}
					<div
						class="main-sponsor-logo-container"
						on:click={() => openLink(sponsor.webpage)}
						on:keydown={() => openLink(sponsor.webpage)}
						role="button"
						tabindex="0">
						<img src={sponsor.logoUrl} alt={sponsor.name} class="main-sponsor-logo" />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	{#if hasRegularSponsors()}
		<h2 class="center">Yhteistyössä</h2>

		<div class="regular-sponsors-container sponsors-container">
			{#each sponsors as sponsor}
				{#if sponsor.logoUrl && !sponsor.mainsponsor}
					<div
						class="sponsor-logo-container"
						on:click={() => openLink(sponsor.webpage)}
						on:keydown={() => openLink(sponsor.webpage)}
						role="button"
						tabindex="0">
						<img src={sponsor.logoUrl} alt={sponsor.name} class="sponsor-logo" />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	h2 {
		color: var(--black-hex);
		margin: 0;
	}
	.sponsors-container {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		padding-bottom: 25px;
		z-index: 1;
		img {
			z-index: 10;
		}
	}

	.all-sponsors-container {
		position: relative;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		background-color: var(--white-hex);
		padding: 50px 0;
	}
	.all-sponsors-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('$lib/images/logo_black.avif');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		opacity: 0.05;
	}

	.main-sponsor-heading {
		margin-bottom: 25px;
		align-self: center;
		@media screen and (max-width: 768px) {
			padding-right: 6rem;
		}
	}

	.sponsor-logo {
		max-width: 150px;
		padding: 10px;
		&:hover {
			transform: scale(1.2);
		}
	}

	.main-sponsor-logo {
		max-width: 400px;
		width: 100%;
		&:hover {
			transform: scale(1.1);
		}
	}

	.sponsor-logo,
	.main-sponsor-logo {
		height: auto;
		border: solid transparent 5px;
		margin: 5px;
		cursor: pointer;
		transition: transform 0.3s ease;
	}
</style>
