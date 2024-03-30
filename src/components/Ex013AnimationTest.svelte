<script lang="ts">
	import { tweened } from "svelte/motion";

	const progress = tweened(.6);
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex012StoreDashboard</legend>
	
	<progress value={$progress}/>
</fieldset>
