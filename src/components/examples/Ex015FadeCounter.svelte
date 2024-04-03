<script lang="ts">
	import { fade } from "svelte/transition";
	let counter = 0;
</script>

{#key counter}
	<p in:fade class="mb-3">count = {counter}</p>
{/key}

<button on:click={() => counter++} class="bg-gray-300 px-2 py-1 rounded"
	>increase counter</button
>
