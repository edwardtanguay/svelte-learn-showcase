<script lang="ts">
	import { createAppStore } from "../stores";

	const appStore = createAppStore();
	// import {removeEmployee} from '../storeFunctions.svelte';

	// const removeEmployee = () => {
	// 	const _appStore = structuredClone($appStore);
	// 	_appStore.employees.pop();
	// 	$appStore = structuredClone(_appStore);
	// };
</script>

<div>
	<p>this site name capitalized is {$appStore.siteName.toUpperCase()}</p>
	<p>There are {$appStore.employees.length} employees.</p>
	<button class="bg-gray-300 px-2 pb-1 rounded" on:click={appStore.removeEmployee}
		>remove one</button
	>
</div>
