<script lang="ts">
	import { fade } from "svelte/transition";
	let isShowing = true;
</script>

<label class="select-none cursor-pointer">
	<input type="checkbox" bind:checked={isShowing} />
	show information
</label>

{#if isShowing}
	<p transition:fade>Here is the information.</p>
{/if}
