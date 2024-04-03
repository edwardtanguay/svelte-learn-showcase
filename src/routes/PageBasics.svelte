<script lang="ts">
	import Ex000Images from "../components/examples/Ex000Images.svelte";
	import Ex001InteractiveTest from "../components/examples/Ex001InteractiveTest.svelte";
	import Ex002InteractiveArray from "../components/examples/Ex002InteractiveArray.svelte";
	import Ex003HtmlRenderTest from "../components/examples/Ex003HtmlRenderTest.svelte";
	import Ex004EachBlock from "../components/examples/Ex004EachBlock.svelte";
	import Ex005AsyncTest from "../components/examples/Ex005AsyncTest.svelte";
	import Ex006SimpleAsync from "../components/examples/Ex006SimpleAsync.svelte";
	import Ex007MovePointer from "../components/examples/Ex007MovePointer.svelte";
	import Ex008ClickOnce from "../components/examples/Ex008ClickOnce.svelte";
	import Ex009EventDispatcher from "../components/examples/Ex009EventDispatcher.svelte";
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
		<Example title="Ex000Images">
			<Ex000Images />
		</Example>
		<Example title="Ex001InteractiveTest">
			<Ex001InteractiveTest />
		</Example>
		<Example title="Ex002InteractiveArray">
			<Ex002InteractiveArray />
		</Example>
		<Example title="Ex002InteractiveArray">
			<Ex002InteractiveArray nums={[5, 6, 7]} />
		</Example>
		<Example title="Ex003HtmlRenderTest">
			<Ex003HtmlRenderTest />
		</Example>
	</section>
	<section>
		<Example title="Ex004EachBlock">
			<Ex004EachBlock />
		</Example>
		<Example title="Ex005AsyncTest">
			<Ex005AsyncTest />
		</Example>
		<Example title="Ex006SimpleAsync">
			<Ex006SimpleAsync />
		</Example>
		<Example title="Ex007MovePointer">
			<Ex007MovePointer />
		</Example>
		<Example title="Ex008ClickOnce">
			<Ex008ClickOnce />
		</Example>
		<Example title="Ex009EventDispatcher">
			<Ex009EventDispatcher
				on:productPurchased={handleProductPurchased}
			/>
		</Example>
		{@html parentMessageFor009}
	</section>
</section>
