<script lang="ts">
	import Ex000Images from "./components/Ex000Images.svelte";
	import Ex001InteractiveTest from "./components/Ex001InteractiveTest.svelte";
	import EX002InteractiveArray from "./components/Ex002InteractiveArray.svelte";
	import Ex003HtmlRenderTest from "./components/Ex003HtmlRenderTest.svelte";
	import Ex004EachBlock from "./components/Ex004EachBlock.svelte";
	import Ex005AsyncTest from "./components/Ex005AsyncTest.svelte";
	import Header from "./components/Header.svelte";
	import MovePointer from "./components/MovePointer.svelte";
	import SimpleAsync from "./components/SimpleAsync.svelte";
</script>

<main>
	<a id="top">
		<Header />
		<section class="flex gap-6">
			<section>
				<Ex000Images />
				<Ex001InteractiveTest />
				<EX002InteractiveArray />
				<EX002InteractiveArray nums={[5, 6, 7]} />
			</section>
			<section>
				<Ex003HtmlRenderTest />
				<Ex004EachBlock />
				<Ex005AsyncTest/>
				<MovePointer />
				<SimpleAsync />
			</section>
		</section>
		<div class="border-t border-gray-400 mt-8 pt-3">
			<a href="#top">^ top</a>
		</div>
		<a id="bottom"> </a>
	</a>
</main>
