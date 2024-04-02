<script lang="ts">
	import Ex017FetchApiData from "../components/Ex017FetchApiData.svelte";
	import Ex018UseAppContext from "../components/Ex018UseAppContext.svelte";
	import Ex019UseAppContext from "../components/Ex019UseAppContext.svelte";
	import Ex020UseStore from "../components/Ex020UseStore.svelte";
	import Ex021UseStore from "../components/Ex021UseStore.svelte";
	import Example from "../components/Example.svelte";
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
	</section>
</section>
