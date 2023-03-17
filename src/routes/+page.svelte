<script>
	import Buttonlink from "$lib/Buttonlink.svelte";
</script>

<svelte:head>
	<title>Bothell Jazz</title>
	<meta
		name="description"
		content="Discover the latest news and events from Bothell High School's Jazz Band! Get updates on upcoming performances, buy tickets, and learn how you can support the band's fundraising efforts."
	/>
	<meta
		property="og:title"
		content="Bothell Jazz"
	/>
</svelte:head>
<h1
	data-aos="fade-down"
	class="jazztext my-12 w-full text-center align-middle text-6xl text-white md:text-7xl lg:text-7xl"
>
	<span class="bg-bothellblue px-2">BOTHELL</span><span class="bg-white px-2 text-bothellblue"
		>JAZZ</span
	>
</h1>
<section class="space-y-10">
	<h2
		class="bebasneue text-center text-4xl text-white"
		data-aos="fade-down"
	>
		Upcoming Events...
	</h2>
	<div class="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-y-0">
		<div
			class="mx-4 max-w-2xl shadow-2xl"
			data-aos="fade-up"
		>
			<div class="md:h-80">
				<img
					class="md:h-full md:object-fill"
					alt="hot java cool jazz logo"
					src="/hotjava.jpg"
				/>
			</div>

			<div class="bg-bgsecondary py-2 px-1">
				<h3 class="bebasneue text-center text-2xl text-white">
					Starbucks 26th Annual Hot Java Cool Jazz
				</h3>
				<h3 class="bebasneue text-center text-2xl text-white">
					March 31 2023 | The Paramount Theatre
				</h3>
			</div>
			<div class="flex flex-row">
				<a
					rel="noreferrer"
					class="bebasneue block w-full bg-gray-500 py-3 text-center text-3xl text-white hover:bg-gray-400"
					href="https://www.stgpresents.org/calendar/13775/starbucks-26th-annual-hot-java-cool-jazz"
					target="_blank">Learn More</a
				>
				<a
					rel="noreferrer"
					class="bebasneue block w-full bg-yellow-600 py-3 text-center text-3xl text-white hover:bg-yellow-500 "
					href="https://my.cheddarup.com/c/bothellmusicboosters/item/4677147"
					target="_blank">Purchase Tickets</a
				>
			</div>
		</div>
		<div
			class="mx-4 max-w-2xl shadow-2xl"
			data-aos="fade-up"
		>
			<div class="md:h-80">
				<img
					alt="Essentially Ellington Logo"
					class="md:h-full md:object-fill"
					src="/ellington.jpg"
				/>
			</div>
			<div class="bg-bgsecondary py-2 px-1">
				<h3 class="bebasneue text-center text-2xl text-white">Essentially Ellington</h3>
				<h3 class="bebasneue text-center text-2xl text-white">May 11th-13th | New York City</h3>
			</div>
			<div class="flex flex-row">
				<a
					rel="noreferrer"
					class="bebasneue block w-full bg-gray-500 py-3 text-center text-3xl text-white hover:bg-gray-400 "
					href="https://2023.jazz.org/essentially-ellington"
					target="_blank">Learn More</a
				>
				<a
					rel="noreferrer"
					class="bebasneue block w-full bg-yellow-600 py-3 text-center text-3xl text-white hover:bg-yellow-500 "
					href="https://my.cheddarup.com/c/bothellmusicboosters/item/4724968"
					target="_blank">Donate</a
				>
			</div>
		</div>
	</div>
</section>
<section class="mt-10 space-y-10">
	<h2
		class="bebasneue text-center text-4xl text-white"
		data-aos="fade-up"
	>
		Additional Resources
	</h2>
	<div class="flex w-full flex-col items-center">
		<div class="flex w-full  max-w-2xl flex-col items-center items-stretch space-y-4 text-center">
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
