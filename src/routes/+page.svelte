<script>
	import Buttonlink from "$lib/Buttonlink.svelte";
	import Card from "$lib/Card.svelte";
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
		<Card
			image="/hotjava.jpg"
			imgAlt="hot java cool jazz logo"
			name="Starbucks 26th Annual Hot Java Cool Jazz"
			location="March 31 2023 | The Paramount Theatre"
			buttons={[
				{
					text: "Learn More",
					style: "plain",
					link: "https://www.stgpresents.org/calendar/13775/starbucks-26th-annual-hot-java-cool-jazz"
				},
				{
					text: "Purchase Tickets",
					style: "monetized",
					link: "https://my.cheddarup.com/c/bothellmusicboosters/item/4677147"
				}
			]}
		/>
		<Card
			image="/ellington.jpg"
			imgAlt="Essentially Ellington Logo"
			name="Essentially Ellington"
			location="May 11th-13th | New York City"
			buttons={[
				{ text: "Learn More", style: "plain", link: "https://2023.jazz.org/essentially-ellington" },
				{
					text: "Donate",
					style: "monetized",
					link: "https://my.cheddarup.com/c/bothellmusicboosters/item/472496"
				}
			]}
		/>
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
