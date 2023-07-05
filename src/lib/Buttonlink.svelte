<script lang="ts">
	export let url: string = "https://bothell.band";
	export let refer: boolean = false;

	export let target: string = "_blank";
</script>

<a
	role="button"
	href={url}
	{target}
	rel={refer ? null : "noreferrer"}
	class="bebasneue mx-3 bg-bothellblue p-3 align-middle text-3xl text-white shadow-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-bothellblue active:translate-y-1 md:text-4xl"
>
	<slot />
</a>
