<script lang="ts">
	import { cart } from "../stores";

	const cartId = 54;

	const buyProduct = (product: string) => {
		const products = $cart.products;
		products.push(product);
		$cart = { cartId, products };
	};
</script>

<p>You have cart #{cartId}.</p>
<p>Click on what you want to buy:</p>
<button
	on:click={() => buyProduct("milk")}
	class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded">milk</button
>
<button
	on:click={() => buyProduct("butter")}
	class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded">butter</button
>
<button
	on:click={() => buyProduct("bread")}
	class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded">bread</button
>
