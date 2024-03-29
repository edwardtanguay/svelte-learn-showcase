<script lang="ts">
	import { getEmployees } from "../tools";
	const employeesPromise = getEmployees();
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">HTML Render Test</legend>
	{#await employeesPromise}
		<p class="mb-3">Employees loading...</p>
	{:then employees}
		<p class="mb-3">There are {employees.length} employees:</p>
		<div class="mb-3">
			{#each employees as employee}
				<p>{employee.firstName} {employee.lastName}</p>
			{/each}
		</div>
	{/await}
</fieldset>
