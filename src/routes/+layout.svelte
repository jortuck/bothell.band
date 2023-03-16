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

<div class="container mx-auto flex flex-col h-screen justify-between">
	<main>
		<slot />
	</main>
	<footer>
		<p class="text-center text-gray-500 my-5">
			This website is not affiliated with the Northshore School District or Bothell High Shchool.
		</p>
	</footer>
</div>
