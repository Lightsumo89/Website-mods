<script lang="ts">
	import { birthday } from '$lib';
	import BgTransition from '$lib/BGTransition.svelte';
	import Birthday from '$lib/Birthday.svelte';
	import Confetti from '$lib/Confetti.svelte';
	import ThanksGiving from '$lib/ThanksGiving.svelte';
	import { onMount, type ComponentType } from 'svelte';

	const Components: Record<string, { default: ComponentType }> = import.meta.glob(
		'/src/lib/components/*.svelte',
		{ eager: true }
	);

	let background = 'bf7a60';
	let TextColor = 'e6d5cf';
	let padding = 20;
	let margin = 25;

	// Change the gradient of the background every minute
	let change: (a: string, b?: number) => void;
	let currentGradient = 0;
	// Gradients taken from https://cssgradient.io/swatches/
	const gradients = [
		'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)', // Day
		'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', // Night
		'linear-gradient(135deg, #FDBB2D 0%, #3A1C71 100%)', // Fresco Crush
		'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)', // Sea Salt
		'linear-gradient(135deg, #d53369 0%, #daae51 100%)', // Bloody Mimosa
		'linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%);' // Disco Club
	];

	let transitionTime = 30 * 1000;
	let transitionDelay = 50 * 1000;

	onMount(() => {
		setInterval(() => {
			let nextGradient = currentGradient;
			while (nextGradient == currentGradient) {
				nextGradient = Math.floor(Math.random() * gradients.length);
			}
			console.log(nextGradient);
			change(gradients[nextGradient], transitionTime);
			setTimeout(() => (currentGradient = nextGradient), transitionTime);
		}, transitionDelay + transitionTime);
	});

	let components = Object.values(Components).map((component) => component.default);
</script>

<title>CS Lounge Dashboard</title>
<div class="h-screen w-screen items-center space-y-10 justify-center flex">
	<div class="absolute inset-0 -z-10">
		<BgTransition background={gradients[currentGradient]} bind:change />
	</div>
	<div class="bg-[--bcolor] flex-none fixed top-16 text-6xl py-5 rounded-lg px-32">
		<div class="  text-[#C39CAE]">CS Lounge</div>
	</div>
	<div class="flex justify-center items-center mt-10">
		<div class="flex flex-col text-5xl">
			<div
				class="rounded-lg backdrop-blur-xl m-[--margin] p-[--padding] bg-[--bcolor] text-[#C39CAE]/70"
			>
				<div class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text">
					<svelte:component this={components[0]} />
				</div>
			</div>
			<div
				class="rounded-lg backdrop-blur-xl m-[--margin] p-[--padding] bg-[--bcolor] text-[#C39CAE]/70"
			>
				<div class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text">
					<svelte:component this={components[1]} />
				</div>
			</div>
		</div>
		<div class="bg-[--bcolor] rounded-lg p-9 h-max text-[#C39CAE]/70">
			<div class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text">
				<svelte:component this={components[2]} />
			</div>
		</div>

		{#if $birthday}{/if}
		<div class="absolute bottom-0 w-full h-1/3 text-[#C39CAE]/70 flex items-center justify-center">
			<div class="bg-[--bcolor] p-[--padding] w-fit rounded-lg">
				<ThanksGiving />
			</div>
		</div>
	</div>
</div>
