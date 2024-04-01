<script lang="ts">
	let highlighted = false;
</script>

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
