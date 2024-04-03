<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import PageWelcome from "../routes/PageWelcome.svelte";
	import PageBasics from "../routes/PageBasics.svelte";
	import PageInteraction from "../routes/PageInteraction.svelte";
	import PageAsync from "../routes/PageAsync.svelte";
	import PageGame from "../routes/PageGame.svelte";
</script>

<Router>
	<nav class="mb-3 flex gap-3 bg-[#005057] px-3 py-1 rounded text-gray-100">
		<Link to="/">Welcome</Link>
		<Link to="/basics">Basics</Link>
		<Link to="/interaction">Interaction</Link>
		<Link to="/async">Async</Link>
		<Link to="/game">Game</Link>
	</nav>
	<main class="w-full">
		<Route path="/" component={PageWelcome} />
		<Route path="/basics" component={PageBasics} />
		<Route path="/interaction" component={PageInteraction} />
		<Route path="/async" component={PageAsync} />
		<Route path="/game" component={PageGame} />
	</main>
</Router>

<style>
</style>
