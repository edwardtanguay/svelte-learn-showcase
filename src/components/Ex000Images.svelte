<script lang="ts">
	const image = "images/moliere.png";
</script>

<div class="p-2">
	<img class="moliere rounded-lg mt-3 rotate-3" src={image} alt="Moliere" />
	<img
		class="-rotate-3 rounded-lg border-4 border-green-700"
		src="images/pheidippides.png"
		alt="runner"
	/>
</div>

<style>
	img.moliere {
		border: 5px solid goldenrod;
	}
</style>
