<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Welcome from "../routes/Welcome.svelte";
	import Info from "../routes/Info.svelte";
	import About from "../routes/About.svelte";
</script>

<Router>
	<nav class="mb-3 flex gap-3 bg-green-800 px-3 py-1 rounded text-gray-100">
		<Link to="/">Welcome</Link>
		<Link to="/info">Info</Link>
		<Link to="/about">About</Link>
	</nav>
	<main>
		<Route path="/" component={Welcome} />
		<Route path="/info" component={Info} />
		<Route path="/about" component={About} />
	</main>
</Router>

<style>

</style>
