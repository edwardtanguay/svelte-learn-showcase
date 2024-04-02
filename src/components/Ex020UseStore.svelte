<script lang="ts">
	import { appStore } from "../stores";

	export const changeSiteName = (siteName: string) => {
		$appStore.siteName = siteName;
	};

	const nums = [2,3,3];
</script>

<div>
	<p>site name: {$appStore.siteName}</p>
	<button
		class="bg-gray-300 px-2 pb-1 rounded"
		on:click={() => changeSiteName("site name was changed")}>test</button
	>
	<ul>
		{#each $appStore.employees as employee}
			<li>{employee.firstName} {employee.lastName}</li>
		{/each}
	</ul>
</div>
