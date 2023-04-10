<script lang="ts">
	export let name: string = "Event";
	export let location: string = "Location";
	export let image: string = "image";
	export let id: string;
	export let alert: string;
	export let highlighted: boolean = false;
	export let imgAlt: string = "image";
	type CardBtn = {
		readonly text: string;
		readonly link: string;
		readonly disabled: boolean;
		readonly style: "plain" | "monetized";
	};
	export let buttons: CardBtn[];
</script>

<div
	class=" w-full shadow-xl"
	class:highlighted
	class:shadow-gray-800={!highlighted}
	{id}
>
	{#if highlighted}
		<div
			class="bebasneue absolute z-50 bg-yellow-600 p-1 text-center text-lg tracking-wide text-white"
		>
			<p>Highlighted Event!</p>
		</div>
	{/if}
	<div
		style="background-image: url({image})"
		class="h-72 bg-white md:h-80"
	>
		<div class="relative h-full  backdrop-blur-2xl">
			<img
				alt={imgAlt}
				class="relative z-40 mx-auto h-full object-contain"
				src={image}
			/>
			{#if alert}
				<div
					class="absolute top-0 left-0 z-50  flex h-full w-full items-center justify-center bg-black bg-opacity-70 object-contain"
				>
					<h4
						class="bebasneue -rotate-45 text-center align-middle text-7xl font-extrabold text-white opacity-100"
					>
						{alert}
					</h4>
				</div>
			{/if}
		</div>
	</div>
	<div class="bg-bgsecondary py-2 px-3">
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">{name}</h3>
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">{location}</h3>
	</div>
	<div class="flex flex-row">
		{#each buttons as button}
			<a
				rel="noreferrer"
				role="button"
				class="bebasneue block w-full py-3 text-center text-2xl md:text-3xl {button.style}"
				class:disabled={button.disabled}
				on:click={(e) => {
					if (button.disabled) {
						e.preventDefault();
					}
				}}
				href={button.link}
				target="_blank">{button.text}</a
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	.highlighted {
		@apply outline outline-2 outline-yellow-600;
	}
	.plain {
		@apply bg-gray-500 text-white transition-colors duration-300 ease-in-out hover:bg-gray-400;
	}
	.monetized {
		@apply bg-yellow-600 text-white transition-colors duration-300 ease-in-out hover:bg-yellow-500;
	}
	.monetized.disabled {
		@apply cursor-not-allowed hover:bg-yellow-600;
	}
	.monetized.plain {
		@apply cursor-not-allowed hover:bg-gray-500;
	}
</style>
