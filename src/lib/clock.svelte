<script lang="ts">
	import dayjs from 'dayjs';

	let currentDate: String;
	let currentTime: String;
	time();
	setInterval(time, 1000);
	function time() {
		currentTime = dayjs().format('h:mm:ssa');
		currentDate = dayjs().format('dddd, MMMM D');
	}
</script>

<slot>{currentTime}<br /> {currentDate}</slot>
