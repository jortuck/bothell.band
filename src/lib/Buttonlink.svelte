<script lang="ts">
	export let url: string = "https://bothell.band";
</script>

<a
	role="button"
	href={url}
	target="_blank"
	rel="noreferrer"
	class="shadow-2xl bebasneue bg-bothellblue text-white text-4xl p-3 align-middle mx-3 hover:bg-white hover:text-bothellblue transition-all ease-in-out duration-300"
>
	<slot />
</a>
