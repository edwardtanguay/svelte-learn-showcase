<script lang="ts">
	import Ex017FetchApiData from "../components/examples/Ex017FetchApiData.svelte";
	import Ex018UseAppContext from "../components/examples/Ex018UseAppContext.svelte";
	import Ex019UseAppContext from "../components/examples/Ex019UseAppContext.svelte";
	import Ex020UseStore from "../components/examples/Ex020UseStore.svelte";
	import Ex021UseStore from "../components/examples/Ex021UseStore.svelte";
	import Example from "../components/Example.svelte";
	import Ex022MaterialIcons from "../components/examples/Ex022MaterialIcons.svelte";
</script>

<section class="flex gap-6">
	<section>
		<Example title="Ex017FetchApiData">
			<Ex017FetchApiData/>
		</Example>
	</section>
	<section>
		<Example title="Ex018UseAppContext">
			<Ex018UseAppContext/>
		</Example>
		<Example title="Ex019UseAppContext">
			<Ex019UseAppContext/>
		</Example>
		<Example title="Ex020UseStore">
			<Ex020UseStore/>
		</Example>
		<Example title="Ex021UseStore">
			<Ex021UseStore/>
		</Example>
		<Example title="Ex022MaterialIcons">
			<Ex022MaterialIcons/>
		</Example>
	</section>
</section>
