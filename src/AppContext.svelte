<script lang="ts">
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { appStore } from "./stores";

	let nums = writable([1, 2, 3, 4]);
	let appTitle = writable("Main App");

	setContext<string>("appTitle", $appTitle);
	setContext<number[]>("nums", $nums);

	// 2024-04-02 could not get appContext to work as in React
	// it only works as read-only
	// it couldn't pass the variable through to the component as writable
	// nor would it pass the type of the variable through to the component
	const changeApptitle = (appTitle: string) => {
		$appTitle = appTitle;
		console.log(`changed to ${$appTitle}`);
	};

	setContext<(num: number) => void>("addNumber", (num) => {
		console.log("in here");
		$nums.push(num);
		console.log($nums);
	});
	setContext<(appTitle: string) => void>("changeAppTitle", changeApptitle);

	// export const changeSiteName = (siteName: string) => {
	// 	$appStore.siteName = "nnn";
	// };
</script>

<button on:click={() => changeApptitle("ksjdfksdfj")}>test</button>
<slot />
