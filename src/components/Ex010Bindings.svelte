<script lang="ts">
	let comment = "none";
	let range = 5;
	let sendNewsletter = false;
	const sendOptions = [
		{
			idCode: "surface",
			title: "Surface mail",
			note: "this is the least expensive method",
		},
		{
			idCode: "air",
			title: "Air mail",
			note: "this will go by plane",
		},
		{
			idCode: "speed",
			title: "Speed delivery",
			note: "this is the fastest method",
		},
	];
	let selectedSendOption = "air";
	let sizeOptions = [
		{
			idCode: "small",
			title: "Small",
			description: "1/4 liter",
		},
		{
			idCode: "medium",
			title: "Medium",
			description: "1/2 liter",
		},
		{
			idCode: "large",
			title: "Large",
			description: "1 liter",
		},
	];
	let selectedSize = "medium";
	let toppingOptions = [
		{
			idCode: "extraCheese",
			title: "extra cheese",
			price: 1,
		},
		{
			idCode: "jalopenos",
			title: "jalapeños",
			price: 1,
		},
		{
			idCode: "greenOlives",
			title: "green olives",
			price: 0.5,
		},
		{
			idCode: "pineapples",
			title: "pine apples",
			price: 1.5,
		},
	];
	let selectedToppings: any[] = [];
	let productDescription = '';

	$: rangeMessage = `${range} (${((range / 25) * 100).toFixed(0)}%)`;
	$: sendNewsletterMessage = sendNewsletter
		? "Send the newsletter."
		: "Don't send the newsletter.";
	$: sendOptionMessage = sendOptions.find(
		(m) => m.idCode === selectedSendOption
	)?.note;
	$: sizeMessage = sizeOptions.find(
		(m) => m.idCode === selectedSize
	)?.description;
	$: toppingMessage = `You selected ${selectedToppings.length} toppings for the price of ${selectedToppings
		.reduce((total, selectedTopping) => {
			const topping = toppingOptions.find(
				(m) => m.idCode === selectedTopping.idCode
			);
			console.log(topping);
			if (topping) {
				console.log("in here");
				total = total + topping.price;
			}
			return total;
		}, 0)
		.toFixed(2)} €.`;

	const initialFocus = (el: HTMLInputElement) => {
		el.focus();
	};
	$:productDescriptionMessage = `Total length is ${productDescription.trim().length} characters.`; 
</script>

<fieldset
	class="border border-gray-400 mt-5 rounded w-fit px-3 pb-3 h-fit flex flex-col justify-center"
>
	<legend class="font-mono text-gray-500">Ex010Bindings</legend>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		Comment: <input type="text" bind:value={comment} use:initialFocus />
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">{comment}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			<div>Ranking: 0</div>
			<input type="range" min="0" max="25" bind:value={range} />
			<div>25</div>
		</div>
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">{rangeMessage}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			<label class="cursor-pointer select-none" for="sendNewsletter"
				><input
					type="checkbox"
					bind:checked={sendNewsletter}
					id="sendNewsletter"
				/> Please send me the newsletter.</label
			>
		</div>
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">
			{sendNewsletterMessage}
		</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			<select class="py-1 px-2 rounded" bind:value={selectedSendOption}>
				{#each sendOptions as sendOption}
					<option value={sendOption.idCode}>{sendOption.title}</option
					>
				{/each}
			</select>
		</div>
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">
			{sendOptionMessage}
		</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2">
			{#each sizeOptions as sizeOption}
				<div>
					<input
						type="radio"
						id={sizeOption.idCode}
						value={sizeOption.idCode}
						bind:group={selectedSize}
					/>
					<label
						class="select-none cursor-pointer"
						for={sizeOption.idCode}>{sizeOption.title}</label
					>
				</div>
			{/each}
		</div>
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">{sizeMessage}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<div class="flex gap-2 flex-col mb-3">
			{#each toppingOptions as toppingOption}
				<div>
					<label
						class="cursor-pointer select-none"
						for={toppingOption.idCode}
						><input
							type="checkbox"
							bind:group={selectedToppings}
							value={toppingOption}
							id={toppingOption.idCode}
						/>
						{toppingOption.title} - {toppingOption.price.toFixed(2)}
						€</label
					>
				</div>
			{/each}
		</div>
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">{toppingMessage}</p>
	</div>
	<div class="bg-yellow-300 p-3 rounded mt-1 mb-1">
		<p class="mb-1">Product Description:</p>
		<textarea class="w-full" bind:value={productDescription} spellcheck="false" />
		<p class="font-mono mt-2 bg-yellow-200 py-1 px-2">{productDescriptionMessage}</p>
	</div>
</fieldset>
