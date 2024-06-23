<script lang="ts">
	import Gallery from './Gallery.svelte';
	import type { Production } from '$lib/types/production.d.ts';
	import Banner from './Banner.svelte';

	export let speksi: Production;
</script>

{#if speksi}
	<div class="container" style="--bg1: {speksi.color1}; --bg2: {speksi.color2}">
		<div class="speksi" style="--bg1: {speksi.color1}; --bg2: {speksi.color2}">
			<Banner src={speksi.banner} alt="Speksin banneri" />

			<h2>{speksi.title}</h2>
			<ul class="stats">
				{#if speksi.statistics}
					{#each speksi.statistics as stat}
						<li><p><strong>{stat.name}</strong>: {stat.value}</p></li>
					{/each}
				{/if}
			</ul>
			{#if speksi.description}
				<p class="synopsis">{@html speksi.description}</p>
			{/if}

			<div
				class="buttons"
				style="--btncol: {speksi.color_button}; --buttonColor: {speksi.color_button2}">
				{#if speksi.links}
					{#each speksi.links as link}
						<a class="button" href={link.url} target="_blank" rel="noopener noreferrer">
							<span>{link.title}</span>
						</a>
					{/each}
				{/if}
			</div>

			<div class="photos">
				<Gallery images={speksi?.gallery_images} id={speksi?.id} />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		font-family: 'Red Hat Display', sans-serif;
		display: flex;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(to right, var(--bg1), var(--bg2), var(--bg1));
		@media only screen and (max-width: 768px) {
			max-width: 100%;
			background-image: none;
			border-radius: 0;
			padding-left: 0;
			padding-right: 0;
		}

		.speksi {
			width: 70%;
			max-width: 90%;
			color: black;
			text-align: center;
			background-color: #fdfdfd;
			margin: 5rem auto;
			border-radius: 10px;
			> :global(img) {
				border-radius: 10px 10px 0 0;
				width: 100%;
				@media only screen and (max-width: 850px) {
					border-radius: 0;
				}
			}
			@media only screen and (max-width: 850px) {
				max-width: 100%;
				font-size: 1rem;
				width: 100%;
				margin: 0;
				border-radius: 0;
			}
			@media only screen and (min-width: 1300px) {
				max-width: 100%;
				margin: 25px;
				border-radius: 0;
				> :global(img) {
					border-radius: 0;
				}
			}
			h2 {
				margin: 20px auto;
				width: 90%;
				text-transform: uppercase;
				color: var(--bg1);
				text-align: center;
			}
			.stats {
				list-style-type: none;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				max-width: 90%;
				@media only screen and (max-width: 768px) {
					flex-direction: column;
					align-items: center;
				}
				li {
					padding: 0 10px;
					p {
						font-weight: 100;
					}
				}
			}
			.synopsis {
				width: 80%;
				text-align: justify;
				margin: 2rem auto;
			}
			.buttons {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				a {
					background-color: var(--btncol);
					border: none;
					border-radius: 5px;
					display: inline-block;
					text-decoration: none;
					padding: 5px 2rem;
					margin: 1rem;
					transition: all 0.3s;
					box-shadow: 0px 2px 5px #484848;
					color: var(--buttonColor);

					&:hover {
						transform: scale(1.05);
						box-shadow: 0px 2px 9px #484848;
					}
				}
			}

			.photos {
				width: 100%;
				display: flex;
				height: auto;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				@media (max-width: 400px) {
					:global(img) {
						width: 150px;
					}
				}
			}
		}
	}
</style>
