<script lang="ts">
	import { getEmployees } from "../appData";
	const employeesPromise = getEmployees();
</script>

{#await employeesPromise}
	<p class="mb-3">Employees loading...</p>
{:then employees}
	<p class="mb-3">There are {employees.length} employees:</p>
	<div>
		{#each employees as employee}
			<p>{employee.firstName} {employee.lastName}</p>
		{/each}
	</div>
{/await}
