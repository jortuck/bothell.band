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

<div
	data-aos="fade-in"
	class="scrollbar-hide container mx-auto flex h-screen flex-col justify-between"
>
	<h1
		class="mb-12 block flex w-full flex-row items-center justify-center text-center text-6xl md:mt-12 md:text-8xl"
	>
		<div class="bebasneue w-full bg-bothellblue p-2 text-white md:w-auto">BOTHELL</div>
		<div class="jazztext w-full bg-white p-2 text-bothellblue md:w-auto">JAZZ</div>
	</h1>
	<main class="flex-1">
		<slot />
	</main>
	<footer>
		<p class="mx-4 my-5 text-center text-gray-500 opacity-50">
			This website is not affiliated with the Northshore School District or Bothell High School.
			Questions or comments about this website should be directed to <a
				class="underline"
				href="mailto:admin@bothell.band">admin@bothell.band</a
			>, all other inquires should go to
			<a
				class="underline"
				href="mailto:admin@bothell.band">bothellmusicboosters@gmail.com</a
			>.
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
