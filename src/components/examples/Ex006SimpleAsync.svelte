<script lang="ts">
	import { getSkills } from "../../appData";

	const skillsPromise = getSkills();
</script>

{#await skillsPromise then skills}
	<p>There are {skills.length} skills.</p>
{/await}
