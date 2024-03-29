<script lang="ts">
	let comment = "none";
	let range = 5;
	let sendNewsletter = false;

	$: rangeMessage = `${range} (${((range / 25) * 100).toFixed(0)}%)`;
	$: sendNewsletterMessage = sendNewsletter
		? "Send the newsletter."
		: "Don't send the newsletter.";

	const initialFocus = (el: HTMLInputElement) => {
		el.focus();
	};
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex010Bindings</legend>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		Comment: <input type="text" bind:value={comment} use:initialFocus />
		<p class="font-mono mt-2 bg-yellow-200">{comment}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			<div>Ranking: 0</div>
			<input type="range" min="0" max="25" bind:value={range} />
			<div>25</div>
		</div>
		<p class="font-mono mt-2 bg-yellow-200">{rangeMessage}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			<label class="cursor-pointer select-none" for="sendNewsletter"><input type="checkbox" bind:checked={sendNewsletter} id="sendNewsletter" /> Please send me the newsletter.</label>
		</div>
		<p class="font-mono mt-2 bg-yellow-200">{sendNewsletterMessage}</p>
	</div>
</fieldset>
