<script lang="ts">
	import { cart } from "../stores";
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex012StoreDashboard</legend>
	<div>
		{#if $cart.cartId !== 0}
			<p class="text-2xl text-center">
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>
				#{$cart.cartId}
			</p>
			<p>
				There are <b>{$cart.products.length} products</b> in the cart:
			</p>
			<ul>
				{#each $cart.products as product}
					<li class="bg-orange-200 px-2 rounded mt-1">{product}</li>
				{/each}
			</ul>
		{:else}
			<p>Nobody is shopping at the moment.</p>
		{/if}
	</div>
</fieldset>
