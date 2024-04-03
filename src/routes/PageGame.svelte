<script>
	import GameInfoBar from "../components/GameInfoBar.svelte";
	import GamePlayArea from "../components/GamePlayArea.svelte";
</script>

<div class="w-full flex justify-center mt-6">
	<div>
		<GameInfoBar title="The Game 🚩" />
		<GamePlayArea />
		<GameInfoBar title="Play for Fun" />
	</div>
</div>
