<script>
	import GameInfoBar from "../components/GameInfoBar.svelte";
	import GamePlayArea from "../components/GamePlayArea.svelte";
	import { gameFooterMessage } from "../stores";
</script>

<div class="w-full flex justify-center mt-6">
	<div>
		<GameInfoBar title="The Game 🚩" />
		<GamePlayArea />
		<GameInfoBar title={$gameFooterMessage} />
	</div>
</div>
