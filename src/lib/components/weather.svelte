<script lang="ts">
	import { onMount } from 'svelte';

	// Parameters for wttr.in
	// - u: Use US units, fahrenheit. mph, inches.
	// - Q: Superquiet, no weather report or city name.
	// - 0: Show only current weather.
	const WTTR_URL = 'https://wttr.in/Oswego+New+York?u?Q?0';

	let promise: Promise<string>;
	$: promise;
	async function fetchWeather() {
		const response = await fetch(WTTR_URL);
		promise = response.text();
		return promise;
	}
	onMount(fetchWeather);
	setInterval(fetchWeather, 60 * 1000 * 10);
</script>

<div id="wttr">
	{#await promise}
		loading weather...
	{:then wttr}
		<div class="text-3xl">
			{@html wttr}
		</div>
	{/await}
</div>
