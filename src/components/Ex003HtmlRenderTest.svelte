<script lang="ts">
	const htmlMessage = "This is a <b>test</b> with HTML in a string variable.";
</script>

<p class="mb-2">{htmlMessage}</p>
<p>{@html htmlMessage}</p>
