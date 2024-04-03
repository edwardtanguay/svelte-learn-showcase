import { getEmployees } from "./appData";

import { writable } from "svelte/store";
import type { AppStore, Cart } from "./types";

export const cart = writable<Cart>({ cartId: 0, products: [] });

export const appStore = writable<AppStore>({
	siteName: "The Main Site",
	employees: await getEmployees(),
});

export let gameFooterMessage = writable<string>("Click to Count");
export let gameNumberOfTimesClicks = writable<number>(0);
export let gameCollection = writable<string>("");
