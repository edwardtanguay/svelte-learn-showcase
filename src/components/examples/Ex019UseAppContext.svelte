<script lang="ts">
	import { getContext } from "svelte";
	// import { writable, type Writable } from "svelte/store";

	const appTitle = getContext<string>("appTitle");
	const nums = getContext<number[]>("nums");
</script>

<div>
	<p class="mb-2">appTitle has {appTitle.length} characters</p>
	<p class="mb-2">
		The sum of the numbers is {nums.reduce((total, num) => total + num, 0)}.
	</p>
</div>
