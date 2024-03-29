<script lang="ts">
	import Ex000_Images from "./components/EX000_Images.svelte";
	import Ex001_InteractiveTest from "./components/EX001_InteractiveTest.svelte";
	import EX002_InteractiveArray from "./components/EX002_InteractiveArray.svelte";
	import Ex003_HtmlRenderTest from "./components/EX003_HtmlRenderTest.svelte";
	import Ex004_EachBlock from "./components/EX004_EachBlock.svelte";
	import AsyncTest from "./components/AsyncTest.svelte";
	import Header from "./components/Header.svelte";
	import MovePointer from "./components/MovePointer.svelte";
	import SimpleAsync from "./components/SimpleAsync.svelte";
</script>

<main>
	<a id="top">
		<Header />
		<section class="flex gap-6">
			<section>
				<Ex000_Images />
				<Ex001_InteractiveTest />
				<EX002_InteractiveArray />
				<EX002_InteractiveArray nums={[5, 6, 7]} />
			</section>
			<section>
				<Ex003_HtmlRenderTest />
				<Ex004_EachBlock />
				<MovePointer />
				<SimpleAsync />
				<AsyncTest />
			</section>
		</section>
		<div class="border-t border-gray-400 mt-8 pt-3">
			<a href="#top">^ top</a>
		</div>
		<a id="bottom"> </a>
	</a>
</main>
