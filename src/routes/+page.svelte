<script lang="ts">
	import type { ComponentType } from 'svelte';

	const Components: Record<string, { default: ComponentType }> = import.meta.glob(
		'/src/lib/*.svelte',
		{ eager: true }
	);

	// import ColorScheme from 'color-scheme';

	// let scheme = new ColorScheme();

	// scheme
	// 	.from_hue(21) // Start the scheme
	// 	.scheme('contrast') // Use the 'triade' scheme, that is, colors
	// 	// selected from 3 points equidistant around
	// 	// the color wheel.
	// 	.variation('soft'); // Use the 'soft' color variation

	// var colors = scheme.colors();

	// let randnum = Math.floor(Math.random() * colors.length);

	let background = 'bf7a60';
	let TextColor = 'e6d5cf';
	let padding = 20;
</script>

<div class="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center space-y-10">
	<div class="text-center text-6xl">
		{#each Object.values(Components) as { default: Component }}
			<div
				style="color: #{TextColor}; background-color:#{background}; padding: {padding}px"
				class="rounded-lg px-{padding} m-5"
			>
				<svelte:component this={Component} />
			</div>
		{/each}
	</div>
</div>
