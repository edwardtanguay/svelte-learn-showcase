<script lang="ts">
	import { onMount } from "svelte";
	import type { HtmlColor } from "../types";

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
</script>

<div>
	{#each htmlColors as htmlColor}
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
