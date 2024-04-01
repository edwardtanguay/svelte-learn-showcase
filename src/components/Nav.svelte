<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Welcome from "../routes/Welcome.svelte";
	import Basics from "../routes/Basics.svelte";
	import Interaction from "../routes/Interaction.svelte";
</script>

<Router>
	<nav class="mb-3 flex gap-3 bg-[#005057] px-3 py-1 rounded text-gray-100">
		<Link to="/">Welcome</Link>
		<Link to="/basics">Basics</Link>
		<Link to="/interaction">Interaction</Link>
	</nav>
	<main>
		<Route path="/" component={Welcome} />
		<Route path="/basics" component={Basics} />
		<Route path="/interaction" component={Interaction} />
	</main>
</Router>

<style>

</style>
