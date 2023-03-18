<script lang="ts">
	export let url: string = "https://bothell.band";
</script>

<a
	data-aos="fade-in"
	role="button"
	href={url}
	target="_blank"
	rel="noreferrer"
	class="bebasneue mx-3 bg-bothellblue p-3 align-middle text-3xl text-white shadow-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-bothellblue md:text-4xl"
>
	<slot />
</a>
