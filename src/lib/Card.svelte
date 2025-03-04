<script lang="ts">
	export let name: string = "Event";
	export let location: string = "Location";
	export let date: string = "SOON";
	export let locationURL: string;
	export let image: string = "image";
	export let alert: string;
	export let highlighted: boolean = false;
	export let imgAlt: string = "image";
	import Button from "$lib/CardButton.svelte";
</script>

<div
	class="flex w-full flex-col bg-red-500 shadow-xl"
	class:highlighted
	class:shadow-gray-800={!highlighted}
>
	{#if highlighted}
		<div
			class="bebasneue absolute z-50 bg-yellow-600 p-1 text-center text-lg tracking-wide text-white"
		>
			<p>Highlighted Event!</p>
		</div>
	{/if}
	<div
		class="h-72 w-full md:h-80"
		style="background-image: url({image})"
	>
		<div class="relative h-full backdrop-blur-2xl">
			<img
				alt={imgAlt}
				class="relative z-40 mx-auto h-full object-contain"
				src={image}
			/>
			{#if alert}
				<div
					class="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70 object-contain"
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
	<div class="w-full flex-1 bg-bgsecondary px-3 py-2">
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">{name}</h3>
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">
			{#if date}
				{date} |
			{/if}
			{#if locationURL}
				<a
					class="location"
					target="_blank"
					rel="noreferrer"
					href={locationURL}>{location}</a
				>
			{:else}
				{location}
			{/if}
		</h3>
	</div>
	<div class="flex w-full flex-row">
		<slot {Button} />
	</div>
</div>

<style lang="postcss">
	.location {
		@apply text-blue-400;
	}
</style>
