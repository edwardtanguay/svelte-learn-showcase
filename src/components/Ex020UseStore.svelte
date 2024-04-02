<script lang="ts">
	import { appStore } from "../stores";
	// import changeSiteName from '../storeManager.svelte';
	import { getContext } from "svelte";

	// const changeSiteName = getContext("changeSiteName");

	export const changeSiteName = (siteName: string) => {
		$appStore.siteName = "nnn";
	};
</script>

<div>
	<p>site name: {$appStore.siteName}</p>
	<button on:click={() => changeSiteName('nnn')}>test</button>
</div>
