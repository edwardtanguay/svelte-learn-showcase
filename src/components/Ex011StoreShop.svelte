<script lang="ts">
	import { cart } from "../stores";

	const userId = 54;

	const buyProduct = (product:string) => {
		const products = $cart.products;
		products.push(product);
		$cart = {userId, products};
		console.log($cart);
	};
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex011StoreShop</legend>
	<p>Click on what you want to buy:</p>
	<button on:click={() => buyProduct('milk')} class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded"
		>milk</button
	>
	<button on:click={() => buyProduct('butter')} class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded"
		>butter</button
	>
	<button on:click={() => buyProduct('bread')} class="bg-gray-300 font-bold py-1 px-3 mt-2 rounded"
		>bread</button
	>
</fieldset>
