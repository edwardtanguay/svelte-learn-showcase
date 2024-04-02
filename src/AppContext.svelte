<script lang="ts">
	import { setContext } from "svelte";

	const nums = [1, 2, 3, 4];

	setContext<string>("appTitle", "Main App");
	setContext<number[]>("nums", nums);
	setContext
</script>

<slot />
