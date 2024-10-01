<script lang="ts">
	import Clock from '$lib/clock.svelte';
	import CountDown from '$lib/countDown.svelte';
	import ColorScheme from 'color-scheme';

	let scheme = new ColorScheme();

	scheme
		.from_hue(21) // Start the scheme
		.scheme('contrast') // Use the 'triade' scheme, that is, colors
		// selected from 3 points equidistant around
		// the color wheel.
		.variation('soft'); // Use the 'soft' color variation

	var colors = scheme.colors();

	let randnum = Math.floor(Math.random() * colors.length);
	let background = randnum % 2 === 0 ? colors[randnum + 1] : colors[randnum];
	let TextColor = randnum % 2 === 0 ? colors[randnum] : colors[randnum - 1];
	let padding = 20;
</script>

<div class="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center space-y-10">
	<div
		style="color: #{TextColor}; background-color:#{background}; padding:{padding}px"
		class="rounded-lg"
	>
		<div class="text-center text-6xl">
			Days until finals: <CountDown date="12-09-24"></CountDown> days
		</div>
	</div>
	<div style="background-color: #{background}; padding:{padding}px " class=" rounded-lg">
		<div style="color: #{TextColor}" class="text-center text-6xl">
			<Clock></Clock>
		</div>
	</div>
</div>
