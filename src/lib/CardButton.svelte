<script lang="ts">
	export let disabled: boolean = false;
	export let buttonStyle: "plain" | "monetized" | "live";
	export let link: string;
</script>

<a
	rel="noreferrer"
	role="button"
	class="bebasneue block w-full py-3 text-center text-2xl md:text-3xl {buttonStyle}"
	class:disabled
	on:click={(e) => {
		if (disabled) {
			e.preventDefault();
		}
	}}
	href={link}
	target="_blank"><slot /></a
>

<style lang="postcss">
	.plain {
		@apply bg-gray-500 text-white transition-colors duration-300 ease-in-out hover:bg-gray-400;
	}
	.monetized {
		@apply bg-yellow-600 text-white transition-colors duration-300 ease-in-out hover:bg-yellow-500;
	}
	.live {
		@apply bg-red-600 text-white transition-colors duration-300 ease-in-out hover:bg-red-500;
	}
	.monetized.disabled {
		@apply cursor-not-allowed hover:bg-yellow-600;
	}
	.monetized.plain {
		@apply cursor-not-allowed hover:bg-gray-500;
	}
</style>
