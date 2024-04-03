<script>
	import GameInfoBar from "../components/GameInfoBar.svelte";
	import GamePlayArea from "../components/GamePlayArea.svelte";

	let footerMessage = "Click to Count";
</script>

<div class="w-full flex justify-center mt-6">
	<div>
		<GameInfoBar title="The Game 🚩" />
		<GamePlayArea />
		<GameInfoBar title={footerMessage} />
	</div>
</div>
