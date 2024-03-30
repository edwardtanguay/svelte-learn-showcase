<script lang="ts">
	import { cart } from "../stores";
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex012StoreDashboard</legend>
	<div>
		{#if $cart.userId !== 0}
			<p>User who is shopping: {$cart.userId}</p>
			<p>There are {$cart.products.length} products in the cart:</p>
			<ul>
				{#each $cart.products as product}
					<li>{product}</li>
				{/each}
			</ul>
		{:else}
			<p>Nobody is shopping at the moment.</p>
		{/if}
	</div>
</fieldset>
