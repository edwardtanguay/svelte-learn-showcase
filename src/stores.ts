import { writable } from "svelte/store";

export const cart = writable({ userId: 0, products: [] });