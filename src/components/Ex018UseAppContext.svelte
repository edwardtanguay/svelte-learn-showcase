<script lang="ts">
	import { getContext, onMount } from "svelte";
	// import { writable, type Writable } from "svelte/store";

	const appTitle = getContext("appTitle");
	const nums = getContext<number[]>('nums');
</script>

<div>
	<p class="mb-2">appTitle: {appTitle}</p>
	<p class="mb-2">There are {nums.length} numbers that total {nums.reduce((total, num) => total + num, 0)}.</p>
</div>
