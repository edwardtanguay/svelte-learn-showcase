<script lang="ts">
	import Header from "./components/Header.svelte";
	import HtmlRenderTest from "./components/HtmlRenderTest.svelte";
	import Runner from "./components/Runner.svelte";

	const image = "images/moliere.png";
</script>

<main>
	<Header />
	<section class="flex gap-6">
		<section>
			<img class="rounded-lg mt-3 rotate-3" src={image} alt="Moliere" />
			<Runner />
		</section>
		<HtmlRenderTest />
	</section>
</main>

<style>
	img {
		border: 5px solid goldenrod;
	}
</style>
