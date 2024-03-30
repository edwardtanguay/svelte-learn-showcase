import { writable } from "svelte/store";
import type { Cart } from "./types";


export const cart = writable<Cart>({ userId: 0, products: [] });