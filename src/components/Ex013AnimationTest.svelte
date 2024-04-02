<script lang="ts">
	import { tweened } from "svelte/motion";

	const progress = tweened(0, {
		easing: (t) => t,
	});
</script>

<progress value={$progress} />

<div class="mt-2">
	<button on:click={() => progress.set(0.1)}>10%</button>
	<button on:click={() => progress.set(0.25)}>25%</button>
	<button on:click={() => progress.set(0.5)}>50%</button>
	<button on:click={() => progress.set(0.75)}>75%</button>
	<button on:click={() => progress.set(1)}>100%</button>
</div>

<style>
	button {
		background-color: #ccc;
		padding: 0 0.5rem 0.2rem 0.5rem;
		border-radius: 0.2rem;
	}
</style>
