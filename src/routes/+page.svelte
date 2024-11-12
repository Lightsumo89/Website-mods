<script lang="ts">
	import Clock from '$lib/components/clock.svelte';
	import Weather from '$lib/components/weather.svelte';
	import type { ComponentType } from 'svelte';

	const Components: Record<string, { default: ComponentType }> = import.meta.glob(
		'/src/lib/components/*.svelte',
		{ eager: true }
	);

	let background = 'bf7a60';
	let TextColor = 'e6d5cf';
	let padding = 20;
	let margin = 25;

	let components = Object.values(Components).map((component) => component.default);
</script>

<title>CS Lounge Dashboard</title>
<div
	class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] h-screen w-screen items-center space-y-10 justify-center flex"
>
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
	</div>
</div>
