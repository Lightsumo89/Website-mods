<script lang="ts">
	import Countdown from '$lib/countDown.svelte';
	// let remaining: Remaining;
</script>

<div class="bg-slate-900 h-screen flex flex-col items-center justify-center">
	<div class=" bg-gray-700 p-5 rounded-lg">
		<div class="text-blue-50 text-3xl">
			Days until finals: <Countdown date="12-09-24"></Countdown> days
		</div>
	</div>
</div>
