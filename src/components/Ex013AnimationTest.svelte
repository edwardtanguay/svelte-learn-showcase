<script lang="ts">
	import { tweened } from "svelte/motion";

	const progress = tweened(0, {
		easing: (t) => t,
	});
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex013AnimationTest</legend>

	<progress value={$progress} />

	<div class="mt-2">
		<button on:click={() => progress.set(.1)}>10%</button>
		<button on:click={() => progress.set(.25)}>25%</button>
		<button on:click={() => progress.set(.5)}>50%</button>
		<button on:click={() => progress.set(.75)}>75%</button>
		<button on:click={() => progress.set(1)}>100%</button>
	</div>
</fieldset>

<style>
	button {
		background-color: #ccc;
		padding: 0 0.5rem 0.2rem 0.5rem;
		border-radius: 0.2rem;
	}
</style>
