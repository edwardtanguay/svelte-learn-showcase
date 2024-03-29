<script lang="ts">
	import HtmlRenderTest from "./components/HtmlRenderTest.svelte";
	import Runner from "./components/Runner.svelte";

	const message = "Welcome to this Svelte site.";
	const image = "images/moliere.png";
</script>

<main>
	<h1 class="text-green-900 text-3xl mb-6">Svelte Showcase Site</h1>
	<p>{message.toUpperCase()}</p>
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
