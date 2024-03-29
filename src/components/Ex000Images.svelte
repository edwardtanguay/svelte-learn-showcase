<script lang="ts">
	const image = "images/moliere.png";
</script>

<div>
	<fieldset
		class="border border-gray-400 mt-5 rounded w-fit px-3 pb-[1rem] h-fit"
	>
		<legend class="font-mono text-gray-500">Ex000Images</legend>
		<img
			class="moliere rounded-lg mt-3 rotate-3"
			src={image}
			alt="Moliere"
		/>
		<img
			class="-rotate-3 rounded-lg border-4 border-green-700"
			src="images/pheidippides.png"
			alt="runner"
		/>
	</fieldset>
</div>

<style>
	img.moliere {
		border: 5px solid goldenrod;
	}
</style>
