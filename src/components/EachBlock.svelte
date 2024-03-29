<script lang="ts">
	const colors = ["red", "green", "blue", "orange", "purple"];
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit">
	<legend class="font-mono text-gray-500">Each Block</legend>
	{#each colors as color}
		<p class="font-bold" style="color: {color}">{color}</p>
	{/each}
</fieldset>
