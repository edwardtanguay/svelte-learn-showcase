<script lang="ts">
	import { setContext } from "svelte";

	const nums = [1, 2, 3];

	setContext("appTitle", "The Main App");
	setContext("nums", nums);
</script>

<slot />
