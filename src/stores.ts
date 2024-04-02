import { writable } from "svelte/store";
import type { AppStore, Cart } from "./types";

export const cart = writable<Cart>({ cartId: 0, products: [] });

export let store = writable<AppStore>({ siteName: "The Main Site" });
