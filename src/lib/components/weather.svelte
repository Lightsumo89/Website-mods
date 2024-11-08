<script lang="ts">
	import { onMount } from 'svelte';

	// Parameters for wttr.in
	// - u: Use US units, fahrenheit. mph, inches.
	// - Q: Superquiet, no weather report or city name.
	// - 0: Show only current weather.
	const WTTR_URL = 'https://wttr.in/Oswego+New+York?u?Q?0';

	let promise: Promise<string>;
	$: promise;
	onMount(async () => {
		const response = await fetch(WTTR_URL);
		promise = response.text();

		setInterval(async () => {
			const response = await fetch(WTTR_URL);
			promise = response.text();
		}, 600000);
	});
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
