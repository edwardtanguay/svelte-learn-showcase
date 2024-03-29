<script lang="ts">
	let message = "hello";
	$: decoratedMessage = () => {
		const rand = Math.floor(Math.random() * 10) + 1;
		return `(((***${message.toUpperCase()}***))) rand=${rand}`;
	};

	const changeMessage = () => {
		message = "okok";
	};
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">EX001_InteractiveTest</legend>
	<p class="mb-2">{message}</p>
	<p class="mb-2">{@html decoratedMessage()}</p>
	<p class="mb-2">
		<button
			on:click={changeMessage}
			class="bg-gray-300 py-1 px-3 text-black rounded">change text</button
		>
	</p>
</fieldset>
