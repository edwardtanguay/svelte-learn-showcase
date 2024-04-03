<script lang="ts">
	import { onMount } from "svelte";
	import type { HtmlColor } from "../../types";

	let searchText = "";
	let htmlColors: HtmlColor[] = [];

	const fetchHtmlColors = async () => {
		try {
			const response = await fetch(
				"https://edwardtanguay.vercel.app/share/htmlcolors.json"
			);
			if (response.ok) {
				htmlColors = await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error: any) {
			console.error("Error fetching data", error.message);
		}
	};

	onMount(fetchHtmlColors);

	const getTextColor = (textColor: string) => {
		return textColor === "dark" ? "black" : "white";
	};

	$:filteredHtmlColors = htmlColors.filter(m => m.name.toLowerCase().includes(searchText.toLowerCase()));
</script>

<div>
	<input class="w-full mb-2 p-1 rounded placeholder-gray-300" placeholder="search" bind:value={searchText}/>
	{#each filteredHtmlColors as htmlColor}
		<div
			class="border border-gray-300 mb-1 text-sm flex justify-between p-1"
			style="background-color: {htmlColor.hex};color: {getTextColor(
				htmlColor.textColor
			)}"
		>
			<p>
				{htmlColor.name}
			</p>
			<p>
				{htmlColor.hex}
			</p>
		</div>
	{/each}
</div>
