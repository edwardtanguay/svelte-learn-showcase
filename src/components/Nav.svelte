<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import PageWelcome from "../routes/PageWelcome.svelte";
	import PageBasics from "../routes/PageBasics.svelte";
	import PageInteraction from "../routes/PageInteraction.svelte";
	import PageAsync from "../routes/PageAsync.svelte";
</script>

<Router>
	<nav class="mb-3 flex gap-3 bg-[#005057] px-3 py-1 rounded text-gray-100">
		<Link to="/">Welcome</Link>
		<Link to="/basics">Basics</Link>
		<Link to="/interaction">Interaction</Link>
		<Link to="/async">Async</Link>
	</nav>
	<main>
		<Route path="/" component={PageWelcome} />
		<Route path="/basics" component={PageBasics} />
		<Route path="/interaction" component={PageInteraction} />
		<Route path="/async" component={PageAsync} />
	</main>
</Router>

<style>

</style>
