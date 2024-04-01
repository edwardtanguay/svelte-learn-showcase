<script lang="ts">
	export let title = 'nnn'
</script>

<fieldset
	class="border border-[#00505783] mt-5 rounded w-fit px-4 pb-4 pt-1 h-fit flex flex-col justify-center shadow-lg"
>
	<legend class="font-mono text-[#005057ab]"
		>{title}</legend
	>
	<slot />
</fieldset>
