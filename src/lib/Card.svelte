<script lang="ts">
	export let name: string = "Event";
	export let location: string = "Location";
	export let image: string = "image";
	export let imgAlt: string = "image";
	type CardBtn = {
		readonly text: string;
		readonly link: string;
		readonly style: "plain" | "monetized";
	};
	export let buttons: CardBtn[];
</script>

<div
	class="mx-4 max-w-2xl shadow-2xl"
	data-aos="fade-up"
>
	<div class="md:h-80">
		<img
			alt={imgAlt}
			class="md:h-full md:object-fill"
			src={image}
		/>
	</div>
	<div class="bg-bgsecondary py-2 px-1">
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">{name}</h3>
		<h3 class="bebasneue text-center text-2xl text-white lg:text-3xl">{location}</h3>
	</div>
	<div class="flex flex-row">
		{#each buttons as button}
			<a
				rel="noreferrer"
				role="button"
				class="bebasneue block w-full py-3 text-center text-2xl md:text-3xl {button.style}"
				href={button.link}
				target="_blank">{button.text}</a
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	.plain {
		@apply bg-gray-500 text-white hover:bg-gray-400;
	}
	.monetized {
		@apply bg-yellow-600 text-white hover:bg-yellow-500;
	}
</style>
