<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	export let duration = 10000;

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

	$: console.log(width);
</script>

<div
	bind:clientWidth={width}
	style="--w: {width}px; --h: {height}px; --s: {$scroll}"
	class="overflow-hidden h-[--h]"
>
	<div class="flex translate-x-[calc(var(--s)*-100%)]">
		<div bind:clientHeight={height} class="absolute w-[--w]">
			<slot></slot>
		</div>
		<div class="absolute left-full w-[--w]">
			<slot></slot>
		</div>
	</div>
</div>
