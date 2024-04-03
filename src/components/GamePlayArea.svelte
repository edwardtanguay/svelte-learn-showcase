<script>
	import GameBox from "./GameBox.svelte";

</script>

<div class="playArea">
	{#each Array(16) as _}
		<GameBox/>
	{/each}
</div>

<style lang="scss">
	.playArea {
		width: 80vmin;
		height: 40vmin;
		display: grid;
		gap: 1px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		background-color:purple;
		border: 1px solid purple;
	}
</style>
