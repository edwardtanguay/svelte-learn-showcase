import { getEmployees } from "./appData";

import { writable } from "svelte/store";
import type { AppStore, Cart } from "./types";

export const cart = writable<Cart>({ cartId: 0, products: [] });

// employees (avoids top-level await requirement since this won't compile)
const appStore = writable<AppStore>({
	siteName: "The Main Site",
	employees: []
});
(async () => {
	const _employees = await getEmployees();
	appStore.update((s) => ({ ...s, employees: _employees }));
})();
export { appStore };

export let gameFooterMessage = writable<string>("Click to Count");
export let gameNumberOfTimesClicks = writable<number>(0);
export let gameCollection = writable<string>("");
