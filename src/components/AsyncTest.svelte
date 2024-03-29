<script lang="ts">
	import { getEmployees } from "../tools";

	(async () => {
		const employees = await getEmployees();
		console.log(employees);
	})();
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">HTML Render Test</legend>
</fieldset>
