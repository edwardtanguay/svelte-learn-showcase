<script lang="ts">
	import { createEventDispatcher } from "svelte";

	let componentMessage = "";

	const dispatch = createEventDispatcher();

	const handleProductPurchased = () => {
		dispatch("productPurchased", {
			product: {
				title: "Samsung Galaxy S21",
				price: 799,
			},
		});
		componentMessage = "component is processing purchase";
	};
</script>

<p class="mb-3 text-center">{componentMessage}</p>
<button
	class="bg-gray-300 pt-1 pb-2 px-3 text-black rounded"
	on:click={handleProductPurchased}>purchase product</button
>
