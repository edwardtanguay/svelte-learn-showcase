<script lang="ts">
	import { fade } from "svelte/transition";
	let isShowing = true;
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex014FadeTest</legend>

	<label class="select-none cursor-pointer">
		<input type="checkbox" bind:checked={isShowing} />
		show information
	</label>

	{#if isShowing}
		<p transition:fade>Here is the information.</p>
	{/if}
</fieldset>
