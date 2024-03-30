<script lang="ts">
	const userId = 999;
	const products = [
		"Product 900",
		"Product 901",
		"Product 902",
		"Product 903",
	];
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex012StoreDashboard</legend>
	<div>
		<p>User who is shopping: {userId}</p>
		<p>There are {products.length} products in the cart:</p>
		<ul>
			{#each products as product}
				<li>nnn</li>
			{/each}
		</ul>
	</div>
</fieldset>
