<script lang="ts">
	import { Confetti } from 'svelte-confetti';

	const colors = ['#0b9ddf', '#dd443a', '#dd86a5', '#e3830b', '#dcaa14'];
</script>

<div
	class="pointer-events-none fixed left-0 top-[-50px] z-20 flex h-screen w-screen justify-center overflow-hidden"
>
	<!-- Cannons -->
	<div class="absolute bottom-0 left-0">
		<Confetti colorArray={colors} delay={[0, 250]} x={[0.25, 3]} y={[0.75, 4]} />
	</div>
	<div class="absolute bottom-0 right-0">
		<Confetti colorArray={colors} delay={[0, 250]} x={[-0.25, -3]} y={[0.75, 4]} />
	</div>
</div>
