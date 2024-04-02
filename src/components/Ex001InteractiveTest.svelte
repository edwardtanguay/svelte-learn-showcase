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

<p class="mb-2">{message}</p>
<p class="mb-2">{@html decoratedMessage()}</p>
<p>
	<button
		on:click={changeMessage}
		class="bg-gray-300 pb-1 px-3 text-black rounded">change text</button
	>
</p>
