<script lang="ts">
	import Ex000Images from "./components/Ex000Images.svelte";
	import Ex001InteractiveTest from "./components/Ex001InteractiveTest.svelte";
	import Ex002InteractiveArray from "./components/Ex002InteractiveArray.svelte";
	import Ex003HtmlRenderTest from "./components/Ex003HtmlRenderTest.svelte";
	import Ex004EachBlock from "./components/Ex004EachBlock.svelte";
	import Ex005AsyncTest from "./components/Ex005AsyncTest.svelte";
	import Ex006SimpleAsync from "./components/Ex006SimpleAsync.svelte";
	import Ex007MovePointer from "./components/Ex007MovePointer.svelte";
	import Ex008ClickOnce from "./components/Ex008ClickOnce.svelte";
	import Header from "./components/Header.svelte";
</script>

<main>
	<a id="top">
		<Header />
		<section class="flex gap-6">
			<section>
				<Ex000Images />
				<Ex001InteractiveTest />
				<Ex002InteractiveArray />
				<Ex002InteractiveArray nums={[5, 6, 7]} />
			</section>
			<section>
				<Ex003HtmlRenderTest />
				<Ex004EachBlock />
				<Ex005AsyncTest />
				<Ex006SimpleAsync />
				<Ex007MovePointer />
				<Ex008ClickOnce />
			</section>
		</section>
		<div class="border-t border-gray-400 mt-8 pt-3">
			<a href="#top" class="underline">jump to top</a>
		</div>
		<a id="bottom"> </a>
	</a>
</main>
