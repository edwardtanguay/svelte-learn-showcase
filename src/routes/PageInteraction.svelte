<script lang="ts">
	import Ex010Bindings from "../components/examples/Ex010Bindings.svelte";
	import Ex011StoreShop from "../components/examples/Ex011StoreShop.svelte";
	import Ex012StoreDashboard from "../components/examples/Ex012StoreDashboard.svelte";
	import Ex013AnimationTest from "../components/examples/Ex013AnimationTest.svelte";
	import Ex014FadeTest from "../components/examples/Ex014FadeTest.svelte";
	import Ex015FadeCounter from "../components/examples/Ex015FadeCounter.svelte";
	import Ex016ToggleClass from "../components/examples/Ex016ToggleClass.svelte";
	import Example from "../components/Example.svelte";

	let parentMessageFor009 = "";

	const handleProductPurchased = (e: any) => {
		console.log(e);
		parentMessageFor009 = `parent knows about purchase: 
		<div class="border border-gray-700 rounded px-3 py-1 bg-gray-300 font-mono">
			<p>Product: ${e.detail.product.title}</p>
			<p>Price: ${e.detail.product.price}€</p>
		</div>`;
	};
</script>

<section class="flex gap-6">
	<section>
		<Example title="Ex010Bindings">
			<Ex010Bindings />
		</Example>
	</section>
	<section>
		<Example title="Ex011StoreShop">
			<Ex011StoreShop />
		</Example>
		<Example title="Ex012StoreDashboard">
			<Ex012StoreDashboard />
		</Example>
		<Example title="Ex013AnimationTest">
			<Ex013AnimationTest />
		</Example>
		<Example title="Ex014FadeTest">
			<Ex014FadeTest />
		</Example>
		<Example title="Ex015FadeCounter">
			<Ex015FadeCounter />
		</Example>
		<Example title="Ex016ToggleClass">
			<Ex016ToggleClass />
		</Example>
	</section>
</section>
