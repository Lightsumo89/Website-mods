<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';

	export let background: string = 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)';
	export let easing: (x: number) => number = sineInOut;

	let bgTransition = '';

	const transitionTween = tweened(0, {
		easing
	});

	export const change = (newBG: string, duration?: number) => {
		duration = duration ?? 300;
		bgTransition = newBG;
		transitionTween.set(1, { duration });
		setTimeout(() => {
			background = bgTransition;
			bgTransition = '';
			transitionTween.set(0, { duration: 0 });
		}, duration);
	};
</script>

<div class="size-full z-0">
	<div style="background-image: {background}" class="absolute top-0 left-0 -z-10 size-full"></div>
	<div
		style="background-image: {bgTransition}; opacity: {$transitionTween}"
		class="absolute top-0 left-0 z-0 size-full"
	></div>
</div>
