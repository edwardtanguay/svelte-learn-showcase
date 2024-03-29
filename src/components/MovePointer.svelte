<script lang="ts">
	let message = "move the mouse<br/>in this area";

	const handlePointerMove = (e: PointerEvent) => {
		message = `mouse is at<br/>${e.clientX} x ${e.clientY}`;
	};
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-[15rem] px-3 h-[15rem] flex place-items-center"
	on:pointermove={handlePointerMove}
>
	<legend class="font-mono text-gray-500">Move Pointer</legend>
	<p class="mb-2 w-full text-center">{@html message}</p>
</fieldset>
