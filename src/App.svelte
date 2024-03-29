<script lang="ts">
	import AsyncTest from "./components/AsyncTest.svelte";
	import Ex001InteractiveTest from "./components/EX001_InteractiveTest.svelte";
	import EachBlock from "./components/EachBlock.svelte";
	import Header from "./components/Header.svelte";
	import HtmlRenderTest from "./components/HtmlRenderTest.svelte";
	import EX002_InteractiveArray from "./components/EX002_InteractiveArray.svelte";
	import MovePointer from "./components/MovePointer.svelte";
	import Runner from "./components/Runner.svelte";
	import SimpleAsync from "./components/SimpleAsync.svelte";

	const image = "images/moliere.png";
</script>

<main>
	<a id="top">
	<Header />
	<section class="flex gap-6">
		<section>
			<img class="rounded-lg mt-3 rotate-3" src={image} alt="Moliere" />
			<Runner />
		</section>
		<section>
			<Ex001InteractiveTest />
			<EX002_InteractiveArray />
			<EX002_InteractiveArray nums={[5, 6, 7]} />
			<MovePointer />
			<SimpleAsync />
			<AsyncTest />
			<EachBlock />
			<HtmlRenderTest />
		</section>
	</section>
	<a id="bottom"> </a>
	<a href="#top">top</a>
</main>

<style>
	img {
		border: 5px solid goldenrod;
	}
</style>
