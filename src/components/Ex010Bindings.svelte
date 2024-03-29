<script lang="ts">
	let comment = "";

const initialFocus = (el: HTMLInputElement) => {
	el.focus();
}
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex010Bindings</legend>
	<div class="bg-yellow-300 p-3 rounded mt-1">
		Comment: <input type="text" bind:value={comment} use:initialFocus />
		<p class="font-mono mt-2 bg-yellow-200">{comment}</p>
	</div>
</fieldset>
