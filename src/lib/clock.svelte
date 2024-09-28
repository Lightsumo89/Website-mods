<script lang="ts">
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	dayjs.extend(advancedFormat);
	let currentDate: String;
	let currentTime: String;
	time();
	setInterval(time, 1000);
	function time() {
		currentTime = dayjs().format('h:mm:ssa');
		currentDate = dayjs().format('dddd, MMMM Do');
	}
</script>

<slot>{currentTime}<br /> {currentDate}</slot>
