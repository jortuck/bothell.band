<script>
	import Buttonlink from "$lib/Buttonlink.svelte";
</script>

<svelte:head>
	<title>Bothell Band</title>
	<meta
		name="description"
		content="Discover the latest news and events from Bothell High School's band! Get updates on upcoming performances, buy tickets, and learn how you can support the band's fundraising efforts."
	/>
	<meta
		property="og:title"
		content="Bothell Band"
	/>
</svelte:head>
<h1
	data-aos="fade-down"
	class="text-center text-white text-6xl md:text-7xl lg:text-8xl  bebasneue my-12 align-middle w-full"
>
	<span class="bg-bothellblue px-2">BOTHELL</span><span class="text-bothellblue bg-white px-2"
		>BAND</span
	>
</h1>
<section class="space-y-10">
	<h2
		class="bebasneue text-center text-white text-4xl"
		data-aos="fade-down"
	>
		Upcoming Events...
	</h2>
	<div class="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0">
		<div
			class="mx-4 shadow-2xl max-w-2xl"
			data-aos="fade-up"
		>
			<div class="md:h-80">
				<img
					class="md:object-fill md:h-full"
					alt="hot java cool jazz logo"
					src="/hotjava.jpg"
				/>
			</div>

			<div class="bg-bgsecondary py-2 px-1">
				<h3 class="bebasneue text-center text-white text-2xl">
					Starbucks 26th Annual Hot Java Cool Jazz
				</h3>
				<h3 class="bebasneue text-center text-white text-2xl">
					March 31 2023 | The Paramount Theatre
				</h3>
			</div>
			<div class="flex flex-row">
				<a
					rel="noreferrer"
					class="bebasneue w-full bg-gray-500 text-white block text-center text-3xl py-3 hover:bg-gray-400"
					href="https://www.stgpresents.org/calendar/13775/starbucks-26th-annual-hot-java-cool-jazz"
					target="_blank">Learn More</a
				>
				<a
					rel="noreferrer"
					class="bebasneue w-full bg-yellow-600 text-white block text-center text-3xl py-3 hover:bg-yellow-500 "
					href="https://my.cheddarup.com/c/bothellmusicboosters/item/4677147"
					target="_blank">Purchase Tickets</a
				>
			</div>
		</div>
		<div
			class="mx-4 shadow-2xl max-w-2xl"
			data-aos="fade-up"
		>
			<div class="md:h-80">
				<img
					alt="Essentially Ellington Logo"
					class="md:object-fill md:h-full"
					src="/ellington.jpg"
				/>
			</div>
			<div class="bg-bgsecondary py-2 px-1">
				<h3 class="bebasneue text-center text-white text-2xl">Essentially Ellington</h3>
				<h3 class="bebasneue text-center text-white text-2xl">May 11th-13th | New York City</h3>
			</div>
			<div class="flex flex-row">
				<a
					rel="noreferrer"
					class="bebasneue w-full bg-gray-500 text-white block text-center text-3xl py-3 hover:bg-gray-400 "
					href="https://2023.jazz.org/essentially-ellington"
					target="_blank">Learn More</a
				>
				<a
					rel="noreferrer"
					class="bebasneue w-full bg-yellow-600 text-white block text-center text-3xl py-3 hover:bg-yellow-500 "
					href="https://my.cheddarup.com/c/bothellmusicboosters/item/4724968"
					target="_blank">Donate</a
				>
			</div>
		</div>
	</div>
</section>
<section class="mt-10 space-y-10">
	<h2
		class="bebasneue text-center text-white text-4xl"
		data-aos="fade-up"
	>
		Additional Resources
	</h2>
	<div class="w-full flex items-center flex-col">
		<div class="text-center space-y-4  flex flex-col w-full items-center items-stretch max-w-2xl">
			<Buttonlink url="https://www.bothellmusicboosters.org/">Bothell Music Boosters</Buttonlink>
			<Buttonlink url="https://www.facebook.com/bothellmusicboosters"
				>Bothell Music Boosters Facebook</Buttonlink
			>
			<Buttonlink url="https://my.cheddarup.com/c/bothellmusicboosters"
				>Bothell Music Boosters Cheddar Up</Buttonlink
			>
		</div>
	</div>
</section>
