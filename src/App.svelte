<script lang="ts">
	import Runner from './Runner.svelte';

	const message = "Welcome to this Svelte site.";
	const image = "images/moliere.png";
	const htmlMessage = "This is a <b>test</b> with HTML in a string variable."
</script>

<main>
	<h1 class="text-green-900 text-3xl mb-6">Svelte Showcase Site</h1>
	<p>{message.toUpperCase()}</p>
	<img class="rounded-lg mt-3 rotate-3" src={image} alt="Moliere" />
	<Runner/>
	<p class="mt-3">{htmlMessage}</p>
	<p class="mt-3">{@html htmlMessage}</p>
</main>

<style>
	img {
		border: 5px solid goldenrod;
	}
</style>
