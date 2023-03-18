<script>
	import "../app.css";
	import * as AOS from "aos";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import "aos/dist/aos.css";

	onMount(() => {
		if (browser) {
			AOS.init();
			window.AOS = AOS;
		}
	});
</script>

<div class="scrollbar-hide container mx-auto flex h-screen flex-col justify-between">
	<main>
		<slot />
	</main>
	<footer>
		<p class="my-5 text-center text-gray-500">
			This website is not affiliated with the Northshore School District or Bothell High School.
		</p>
	</footer>
</div>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
