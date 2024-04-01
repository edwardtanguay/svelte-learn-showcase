<script lang="ts">
	import { cart } from "../stores";
</script>

<div>
	{#if $cart.cartId !== 0}
		<p class="text-2xl text-center">
			<i class="fa fa-shopping-cart" aria-hidden="true"></i>
			#{$cart.cartId}
		</p>
		<p>
			There are <b>{$cart.products.length} products</b> in the cart:
		</p>
		<ul class="list-disc ml-6">
			{#each $cart.products as product}
				<li class="bg-orange-200 pr-2 rounded mt-1">{product}</li>
			{/each}
		</ul>
	{:else}
		<p>Nobody is shopping at the moment.</p>
	{/if}
</div>
