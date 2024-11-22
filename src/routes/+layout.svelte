<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { source } from 'sveltekit-sse';
	import { listener, confetti, reloading } from '$lib';
	import { isInit, isConfetti, type EmitterEvent, isReload } from '$lib/event';
	import { randomBits } from '$lib/listener';
	import { fade } from 'svelte/transition';

	onMount(async () => {
		const stream = source(`/api/stream`, {
			close: ({ connect }) => {
				listener.set(null);
				setTimeout(connect, 2000);
			}
		});
		stream.select('message').subscribe((msg: string) => {
			let event: EmitterEvent | null = null;
			// Remove irrrelevant bits
			msg = msg.substring(randomBits);
			try {
				event = JSON.parse(msg);
			} catch {
				return;
			}

			if (!event) return;

			if (isInit(event)) {
				listener.set(event.data.id);
			}

			if (isReload(event)) {
				reloading.set(true);
				setTimeout(() => window.location.reload(), 10000);
			}

			if (isConfetti(event)) {
				confetti.set(true);
				const duration = event?.data?.duration ?? 5000;
				setTimeout(() => confetti.set(false), duration);
			}

			console.log(event);
		});
	});
</script>

{#if $reloading}
	<div
		transition:fade
		class="fixed h-screen w-screen bg-black/75 backdrop-blur-md z-30 flex justify-center items-center"
	>
		<div class="text-white text-7xl">Reloading the dashboard</div>
	</div>
{/if}
<slot />
