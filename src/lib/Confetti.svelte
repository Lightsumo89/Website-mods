<script lang="ts">
	import { Confetti } from 'svelte-confetti';

	const colors = ['#0b9ddf', '#dd443a', '#dd86a5', '#e3830b', '#dcaa14'];
</script>

<div
	class="pointer-events-none fixed left-0 top-[-50px] z-20 flex h-screen w-screen justify-center overflow-hidden"
>
	<!-- Fullscreen -->
	<Confetti
		colorArray={colors}
		x={[-5, 5]}
		y={[0, 0.1]}
		fallDistance="100vh"
		infinite
		delay={[100, 2500]}
		duration={10000}
		amount={30}
	/>
</div>
