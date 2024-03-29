<script lang="ts">
	import AsyncTest from "./components/AsyncTest.svelte";
	import EachBlock from "./components/EachBlock.svelte";
	import Header from "./components/Header.svelte";
	import HtmlRenderTest from "./components/HtmlRenderTest.svelte";
	import InteractiveArray from "./components/InteractiveArray.svelte";
	import InteractiveTest from "./components/InteractiveTest.svelte";
	import MovePointer from "./components/MovePointer.svelte";
	import Runner from "./components/Runner.svelte";
	import SimpleAsync from "./components/SimpleAsync.svelte";

	const image = "images/moliere.png";
</script>

<main>
	<Header />
	<section class="flex gap-6">
		<section>
			<img class="rounded-lg mt-3 rotate-3" src={image} alt="Moliere" />
			<Runner />
		</section>
		<section>
			<MovePointer/>
			<SimpleAsync/>
			<AsyncTest/>
			<EachBlock />
			<HtmlRenderTest />
			<InteractiveTest />
			<InteractiveArray />
			<InteractiveArray nums={[5, 6, 7]} />
		</section>
	</section>
</main>

<style>
	img {
		border: 5px solid goldenrod;
	}
</style>
