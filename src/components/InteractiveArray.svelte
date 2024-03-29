<script lang="ts">
	export let nums = [9, 2, 1, 4];

	const addNumber = () => {
		nums = [...nums, Math.floor(Math.random() * 10) + 1];
	};

	$: sum = nums.reduce((sum, num) => {
		sum += num;
		return sum;
	}, 0);
</script>

<fieldset class="border border-gray-400 mt-5 rounded w-fit px-3 h-fit">
	<legend class="font-mono text-gray-500">Interactive Test #2</legend>
	<p class="mb-2">{nums.join(", ")}</p>
	<p class="mb-2">sum = {sum}</p>
	<p class="mb-2">
		<button
			on:click={addNumber}
			class="bg-gray-300 py-1 px-3 text-black rounded"
			>add random number</button
		>
		{#if nums.length > 10}
			<p class="text-red-600">You now have more than ten numbers.</p>
		{:else}
			<p>Please add some numbers.</p>
		{/if}
	</p>
</fieldset>
