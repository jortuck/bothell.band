<script>
	import { page } from "$app/stores";
	import Buttonlink from "$lib/Buttonlink.svelte";
</script>

<svelte:head>
	<title>Bothell High School Jazz Band | 404 Page Not Found</title>
</svelte:head>
<div class="bef mx-4 flex h-full flex-col items-center justify-center space-y-5">
	<h1
		class="jazztext p-3 text-center text-6xl font-extrabold text-gray-100 md:text-7xl lg:text-8xl xl:text-9xl"
	>
		{$page.status}
		{$page.error.message}
	</h1>
	<h2 class="bebasneue text-center text-3xl text-gray-100 md:text-4xl lg:text-5xl">
		Looks like we've taken a turn into the wrong key!
	</h2>
	<Buttonlink
		target="_self"
		url="/">Return Home</Buttonlink
	>
</div>
