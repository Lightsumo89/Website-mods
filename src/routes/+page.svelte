<script lang="ts">
	import Clock from '$lib/clock.svelte';
	import CountDown from '$lib/countDown.svelte';

	let background = 'gray';
	let TextColor = 'white';
</script>

<div class="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center space-y-10">
	<div style="--bg: {background}" class="bg-[var(--bg)] rounded-lg p-7">
		<div style="--text: {TextColor}" class="text-center text-6xl text-[var(--text)]">
			Days until finals: <CountDown date="12-09-24"></CountDown> days
		</div>
	</div>
	<div style="--bg:{background}" class=" bg-[var(--bg)] rounded-lg p-7">
		<div style="--text: {TextColor}" class="text-center text-6xl text-[var(--text)]">
			<Clock></Clock>
		</div>
	</div>
</div>
