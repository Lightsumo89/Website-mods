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

<div
	class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] h-screen w-screen items-center space-y-10 justify-center flex"
>
	<div class="text-6xl bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text">
		<div class=" flex flex-col justify-center">
			<div
				class="rounded-lg backdrop-blur-xl m-[--margin] p-[--padding] bg-[--bcolor] text-[#C39CAE]/70"
			>
				<div class="bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text">
					<svelte:component this={components[0]} />
				</div>
			</div>
			<div
				class="rounded-lg backdrop-blur-xl m-[--margin] p-[--padding] bg-[--bcolor] text-fair-pink-100/70"
			>
				<svelte:component this={components[1]} />
			</div>
		</div>
		<div class="bg-[--bcolor] rounded-lg flex justify-center m-[--margin]">
			<div
				class="text-6xl rounded-lg backdrop-blur-xl m-15 p-[--padding] bg-[--bcolor] bg-gradient-to-br from-[#B190BA] to-[#E8B595] bg-clip-text text-fair-pink-50/25"
			>
				<svelte:component this={components[2]} />
			</div>
		</div>
	</div>
</div>
