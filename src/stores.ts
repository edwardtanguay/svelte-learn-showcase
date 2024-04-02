import { onMount } from "svelte";

import { getEmployees } from "./appData";

import { writable } from "svelte/store";
import type { AppStore, Cart } from "./types";

export const cart = writable<Cart>({ cartId: 0, products: [] });

export const appStore = writable<AppStore>({
	siteName: "The Main Site",
	employees: await getEmployees()
});

console.log(appStore);

// onMount(async () => {
// 	appStore.siteName = await getEmployees();
// });