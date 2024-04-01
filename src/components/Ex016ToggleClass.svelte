<script lang="ts">
	let highlighted = false;
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex016ToggleClass</legend>

	<div
		class="card font-mono flex items-center justify-center"
		class:highlight={highlighted}
	>
		<p>Toggle Test</p>
	</div>
	<button
		class="bg-gray-300 px-2 pt-1 pb-2 rounded"
		on:click={() => (highlighted = !highlighted)}>toggle</button
	>
</fieldset>

<style>
	.card {
		width: 10rem;
		height: 10rem;
		background-color: #ccc;
	}
	.highlight {
		background-color: yellow;
	}
</style>
