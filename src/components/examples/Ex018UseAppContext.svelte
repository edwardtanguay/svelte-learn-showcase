<script lang="ts">
	import { getContext } from "svelte";

	const appTitle = getContext<string>("appTitle");
	let nums = getContext<number[]>("nums");
	// const addNumber = getContext<(num: number) => void>("addNumber");
</script>

<div>
	<p class="mb-2">appTitle: {appTitle}</p>
	<p>
		There are {nums.length} numbers: {nums.join(", ")}
	</p>
	<!-- <p class="mb-2">
		<button
			on:click={() => addNumber(1)}
			class="bg-gray-300 px-2 py-1 rounded">Add Number</button
		>
	</p> -->
</div>
