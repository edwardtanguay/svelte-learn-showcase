import { writable } from "svelte/store";
import type { Cart } from "./types";


export const cart = writable<Cart>({ cartId: 0, products: [] });