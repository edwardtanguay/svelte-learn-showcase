<script lang="ts">
	const htmlMessage = "This is a <b>test</b> with HTML in a string variable.";
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">HTML Render Test</legend>
	<p class="mb-2">{htmlMessage}</p>
	<p class="mb-2">{@html htmlMessage}</p>
</fieldset>
