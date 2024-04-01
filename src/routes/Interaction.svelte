<script lang="ts">
	import Ex000Images from "../components/Ex000Images.svelte";
	import Ex001InteractiveTest from "../components/Ex001InteractiveTest.svelte";
	import Ex002InteractiveArray from "../components/Ex002InteractiveArray.svelte";
	import Ex003HtmlRenderTest from "../components/Ex003HtmlRenderTest.svelte";
	import Ex004EachBlock from "../components/Ex004EachBlock.svelte";
	import Ex005AsyncTest from "../components/Ex005AsyncTest.svelte";
	import Ex006SimpleAsync from "../components/Ex006SimpleAsync.svelte";
	import Ex007MovePointer from "../components/Ex007MovePointer.svelte";
	import Ex008ClickOnce from "../components/Ex008ClickOnce.svelte";
	import Ex009EventDispatcher from "../components/Ex009EventDispatcher.svelte";
	import Ex010Bindings from "../components/Ex010Bindings.svelte";
	import Ex011StoreShop from "../components/Ex011StoreShop.svelte";
	import Ex012StoreDashboard from "../components/Ex012StoreDashboard.svelte";
	import Ex013AnimationTest from "../components/Ex013AnimationTest.svelte";
	import Ex014FadeTest from "../components/Ex014FadeTest.svelte";
	import Ex015FadeCounter from "../components/Ex015FadeCounter.svelte";
	import Ex016ToggleClass from "../components/Ex016ToggleClass.svelte";

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
		<Ex010Bindings />
	</section>
	<section>
		<Ex016ToggleClass/>
		<Ex011StoreShop />
		<Ex012StoreDashboard />
		<Ex013AnimationTest />
		<Ex014FadeTest />
		<Ex015FadeCounter/>
	</section>
</section>
