<script lang="ts">
	import AsyncTest from "./components/AsyncTest.svelte";
	import Ex001InteractiveTest from "./components/EX001_InteractiveTest.svelte";
	import EachBlock from "./components/EachBlock.svelte";
	import Header from "./components/Header.svelte";
	import EX002_InteractiveArray from "./components/EX002_InteractiveArray.svelte";
	import MovePointer from "./components/MovePointer.svelte";
	import SimpleAsync from "./components/SimpleAsync.svelte";
	import Ex003HtmlRenderTest from "./components/EX003_HtmlRenderTest.svelte";
	import Ex000Images from "./components/EX000_Images.svelte";
</script>

<main>
	<a id="top">
		<Header />
		<section class="flex gap-6">
			<section>
				<Ex000Images />
				<Ex001InteractiveTest />
				<EX002_InteractiveArray />
				<EX002_InteractiveArray nums={[5, 6, 7]} />
			</section>
			<section>
				<Ex003HtmlRenderTest />
				<MovePointer />
				<SimpleAsync />
				<AsyncTest />
				<EachBlock />
			</section>
		</section>
		<a id="bottom"> </a>
		<a href="#top">top</a>
	</a>
</main>
