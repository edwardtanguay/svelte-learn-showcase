<script lang="ts">
	import { getSkills } from "../appData";

	const skillsPromise = getSkills();
	
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">HTML Render Test</legend>
	{#await skillsPromise then skills}
		<p class="mb-3">There are {skills.length} skills.</p>
	{/await}
</fieldset>
