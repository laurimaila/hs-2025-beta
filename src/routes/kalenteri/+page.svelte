<script lang="ts">
	let media: number
</script>

<svelte:window bind:innerWidth={media} />
<svelte:head>
	<title>HybridiSpeksin kalenteri</title>
	<meta name="description" content="HybridiSpeksin kalenteri" />
</svelte:head>

<div class="page">
	<div class="calendar-container">
		<iframe
			id="calendar"
			src="https://calendar.google.com/calendar/embed?height=1000&amp;wkst=2&amp;ctz=Europe%2FHelsinki&amp;src=ZDNqcGUzazg4bnBxOWY5N2JhMjZmaTl1NWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23227F63&amp;showTz=0&amp;mode=MONTH&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;hl=fi"
			style="border-width: 0"
			width="100%"
			height="100%"
			frameborder="0"
			title="HybridiSpeksin kalenteri"
			aria-label="HybridiSpeksin kalenteri" />
	</div>
</div>

<style>
	.page {
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: start;
		padding: 1.5rem 0;
		padding-bottom: 3rem;
		width: 100vw;
		@media (max-width: 768px) {
			padding-bottom: 1rem;
		}
	}
	.calendar-container {
		height: auto;
		width: 85%;
		max-width: 1000px;
		height: 60vh;
		overflow-x: hidden;
		align-self: center;
		background-color: #e3e9ff;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
		border-radius: 10px;
		margin: 0 auto;
		@media (max-width: 768px) {
			height: 27.5rem;
		}
	}
</style>
