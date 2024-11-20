<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	export let duration = 10000;

	let containerWidth: number = 0;
	let width: number = 0;
	let height: number = 0;

	let scroll = tweened(0, { duration });

	const move = () => {
		scroll.set(1);
		setTimeout(() => {
			scroll.set(0, { duration: 0 });
		}, duration);
	};

	onMount(() => {
		move();
		setInterval(move, duration + 1);
	});
</script>

<div
	bind:clientWidth={containerWidth}
	style="--cw: {containerWidth}px; --h: {height}px; --s: {$scroll}"
	class="overflow-hidden h-[--h]"
>
	<div style="--w: {width}px" class="flex translate-x-[calc(var(--s)*var(--w)*-1)]">
		<div bind:clientHeight={height} bind:clientWidth={width} class="absolute min-w-[--cw]">
			<slot></slot>
		</div>
		<div class="absolute left-[--w] min-w-[--cw]">
			<slot></slot>
		</div>
	</div>
</div>
