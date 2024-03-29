<script lang="ts">
	let selectedColor = "";
	let colors = ["red", "green", "blue", "brown", "purple"];

	const chooseColor = (color: string) => {
		selectedColor = color;
	};

	const deleteFirstColor = () => {
		colors = colors.slice(1);
		console.log(colors);
	};
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit">
	<legend class="font-mono text-gray-500">Ex004EachBlock</legend>
	{#if selectedColor !== "" && colors.length !== 0}
		<p class="mb-3">
			Choosen color: <span
				class="font-bold"
				style="color: {selectedColor}">{selectedColor}</span
			>
		</p>
	{/if}
	<div class="flex gap-3">
		{#each colors as color, index}
			<button
				class="bg-gray-300 font-bold py-1 px-3 rounded"
				on:click={() => chooseColor(color)}
				style="color: {color}">{index}: {color}</button
			>
		{/each}
	</div>
	{#if colors.length !== 0}
	<button
		class="bg-gray-300 font-bold py-1 px-3 rounded mt-3"
		on:click={() => deleteFirstColor()}>delete first color</button
	>
	{:else}
		<p>no colors left</p>
	{/if}
</fieldset>
