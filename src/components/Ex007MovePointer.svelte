<script lang="ts">
	let message = "move the mouse<br/>in this area";

	const handlePointerMove = (e: PointerEvent) => {
		message = `mouse is at<br/>${e.clientX} x ${e.clientY}`;
	};
</script>

<div class="w-[15rem] h-[15rem] flex place-items-center" on:pointermove={handlePointerMove}>
	<p class="mb-2 w-full text-center">{@html message}</p>
</div>
