<script lang="ts">
	import { getEmployees } from "../tools";

	const message = getEmployees();
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">HTML Render Test</legend>
	<p class="mb-2">{message}</p>
</fieldset>
