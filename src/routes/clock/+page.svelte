<script lang="ts">
	import moment from 'moment';
	let currentDate: String;
	let currentTime: String;

	let dow = moment().format('dddd');
	time();
	setInterval(time, 1000);
	function time() {
		currentTime = moment().format('h:mm:ssa');
		currentDate = moment().format('dddd, MMMM Do');
	}
</script>

<div class="bg-slate-900 h-screen">
	<div class="flex flex-col justify-center items-center h-screen text-center text-6xl text-cyan-50">
		{currentTime} <br />
		{currentDate}
	</div>
</div>
