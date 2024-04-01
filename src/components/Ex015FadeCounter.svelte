<script lang="ts">
	import { fade } from "svelte/transition";
	let counter = 0;
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex015FadeCounter</legend>

	{#key counter}
		<p in:fade class="mb-3">count = {counter}</p>
	{/key}

	<button on:click={() => counter++} class="bg-gray-300 px-2 py-1 rounded"
		>increase counter</button
	>
</fieldset>
