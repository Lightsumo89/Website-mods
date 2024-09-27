<script lang="ts">
	import moment from 'moment';
	import ColorScheme from 'color-scheme';
	let currentDate: String;
	let currentTime: String;
	let background = 'grey';
	let TextColor = time();
	setInterval(time, 1000);
	function time() {
		currentTime = moment().format('h:mm:ssa');
		currentDate = moment().format('dddd, MMMM Do');
	}
</script>

<div class="bg-slate-900 h-screen w-screen flex justify-center items-center">
	<div style="--c: {background}" class="bg-[var(--c)] rounded-lg p-10">
		<div style="--d: {TextColor}" class="text-center text-6xl text-[var(--d)]">
			{currentTime} <br />
			{currentDate}
		</div>
	</div>
</div>
