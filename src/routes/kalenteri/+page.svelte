<script lang="ts">
	let media: number;
	let calendarMode = 'MONTH';

	// Update calendarMode based on media width
	$: calendarMode = media < 768 ? 'AGENDA' : 'MONTH';
	$: calendarSrc = `https://calendar.google.com/calendar/embed?height=1000&wkst=2&ctz=Europe%2FHelsinki&
			src=ZDNqcGUzazg4bnBxOWY5N2JhMjZmaTl1NWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23227F63&
			showCalendars=0&showTabs=1&showPrint=0&;hl=fi&mode=${calendarMode}`;
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
			src={calendarSrc}
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
		min-height: 50vh;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: start;
		padding: 1.5rem 0;
		padding-bottom: 3rem;
		width: 100vw;
		@media (max-width: 768px) {
			height: 80vh;
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
		border-radius: 5px;
		margin: 0 auto;
		@media (max-width: 768px) {
			height: 65vh;
		}
	}
</style>
