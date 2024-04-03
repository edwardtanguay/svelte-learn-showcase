<script lang="ts">
	import { emojis } from "../appData";
	import { gameFooterMessage, gameNumberOfTimesClicks } from "../stores";

	let emoji = "";

	const getNewEmoji = () => {
		const index = Math.floor(Math.random() * emojis.length);
		emoji = emojis[index];
		return null;
	};

	getNewEmoji();

	const handleClickedEmoji = () => {
		$gameNumberOfTimesClicks++;
		$gameFooterMessage = `${$gameNumberOfTimesClicks} emoji${$gameNumberOfTimesClicks === 1 ? '' : 's'} clicked`;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="box cursor-pointer select-none" on:click={handleClickedEmoji}>
	<p>{emoji}</p>
</div>

<style lang="scss">
	$backgroundColor: pink;
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $backgroundColor;
		font-size: 3vmin;
		&:hover {
			background-color: darken($backgroundColor, 10%);
		}
	}
</style>
