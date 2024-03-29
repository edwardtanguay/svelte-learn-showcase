<script lang="ts">
	let message = "hello";

	const changeMessage = () => {
		message = "okok";
	};
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">Interactive Test</legend>
	<p class="mb-2">{message}</p>
	<p class="mb-2">
		<button
			on:click={changeMessage}
			class="bg-gray-300 py-1 px-3 text-black rounded">change text</button
		>
	</p>
</fieldset>
