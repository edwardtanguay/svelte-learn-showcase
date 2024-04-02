<script lang="ts">
	let message = "message that gets changed once";
	let clickedOnce = false;

	const handleChangeMessage = (e: MouseEvent) => {
		const currentDate = new Date();
		const formattedDate = currentDate
			.toISOString()
			.replace("T", " ")
			.split(".")[0];
		message = `changed at ${formattedDate}`;
		clickedOnce = true;
	};
</script>

<p class="text-center mb-3">{message}</p>
<button
	class="bg-gray-300 pt-1 pb-2 px-3 text-black rounded"
	style="opacity: {clickedOnce ? '0.5' : ''}; cursor: {clickedOnce
		? 'default'
		: 'pointer'}"
	on:click|once={(e) => handleChangeMessage(e)}>change message</button
>
