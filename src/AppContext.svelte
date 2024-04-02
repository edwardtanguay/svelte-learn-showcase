<script lang="ts">
	import { setContext} from 'svelte';

	let nums = [5,2,6,2,3];

	setContext('nums', nums);
</script>