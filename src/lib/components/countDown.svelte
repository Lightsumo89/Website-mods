<script lang="ts">
	let date = '12-09-24 8:00:00am';
	let futueDate = new Date(date).getTime();
	let differenceInDays: Number;

	function calc() {
		let timeInBetween = futueDate - new Date().getTime();
		differenceInDays = Math.round(timeInBetween / (1000 * 3600 * 24));
	}
	calc();
	setInterval(calc, 5000);
</script>

<slot>Days until finals: {differenceInDays} days</slot>
