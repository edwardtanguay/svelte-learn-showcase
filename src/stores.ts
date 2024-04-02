import { getEmployees } from "./appData";

import { writable } from "svelte/store";
import type { AppStore, Cart } from "./types";

export const cart = writable<Cart>({ cartId: 0, products: [] });

export const appStore = writable<AppStore>({
	siteName: "The Main Site",
	employees: await getEmployees(),
});

// const removeEmployee = () => {
// 	const _appStore = structuredClone(appStore);
// 	_appStore.employees.pop();
// 	appStore = structuredClone(_appStore);
// };
