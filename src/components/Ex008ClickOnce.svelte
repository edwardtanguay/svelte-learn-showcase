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

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex008ClickOnce</legend>
	<p class="text-center mb-3">{message}</p>
	<button
		class="bg-gray-300 pt-1 pb-2 px-3 text-black rounded"
		style="opacity: {clickedOnce ? '0.5' : ''}; cursor: {clickedOnce
			? 'default'
			: 'pointer'}"
		on:click|once={(e) => handleChangeMessage(e)}>change message</button
	>
</fieldset>
