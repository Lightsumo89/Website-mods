<script lang="ts">
	export let counter = 0;

	function countUp() {
		counter++;
	}

	function countDown() {
		counter--;
	}
</script>

<div class="bg-sky-500 py-5">
	<h1 class="flex justify-center items-center font-bold text-[40px]">My Counter App</h1>
</div>
<div class="flex flex-col justify-center items-center h-screen">
	<h1 class="text-3xl font-bold">
		Current Count: {counter}
	</h1>

	<div class="flex gap-4">
		<button class="bg-sky-400 rounded-lg p-2 text-sky-100" on:click={countUp}>Add Count</button>
		<button class="bg-woody-brown-800 rounded-lg p-2 text-woody-brown-100" on:click={countDown}
			>Remove Count</button
		>
	</div>
</div>
