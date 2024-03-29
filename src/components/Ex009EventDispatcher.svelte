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

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex009EventDispatcher</legend>
	<p class="mb-3 text-center">{componentMessage}</p>
	<button
		class="bg-gray-300 pt-1 pb-2 px-3 text-black rounded"
		on:click={handleProductPurchased}>purchase product</button
	>
</fieldset>
