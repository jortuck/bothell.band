<script>
	import Buttonlink from "$lib/Buttonlink.svelte";
	import Card from "$lib/Card.svelte";
	import { browser } from "$app/environment";
	function share() {
		navigator
			.share({
				url: "https://bothell.band",
				title: "Bothell High School Jazz Band"
			})
			.then(() => {
				console.log("Shared");
			});
	}
</script>

<svelte:head>
	<title>Bothell High School Jazz Band | Home</title>
	<meta
		name="description"
		content="Stay up-to-date on Bothell High School Jazz Band's news and events. Buy tickets, support fundraising efforts, and don't miss upcoming performances.
"
	/>
	<meta
		name="og:description"
		content="Stay up-to-date on Bothell High School Jazz Band's news and events. Buy tickets, support fundraising efforts, and don't miss upcoming performances.
"
	/>
	<meta
		name="keywords"
		content="Bothell High School, Jazz Band, Jazz Music, School Band, Performance, Upcoming Events, Fundraising"
	/>
	<meta
		property="og:title"
		content="Bothell High School Jazz Band | Home"
	/>
	<meta
		property="og:url"
		content="https://bothell.band/"
	/>
	<meta
		property="og:site_name"
		content="Bothell High School Jazz Band"
	/>
</svelte:head>

<section class="mb-10 space-y-10">
	<h2 class="bebasneue text-center text-4xl text-white md:text-5xl">Upcoming Events...</h2>
	<div class="grid grid-rows-1 justify-items-center space-y-10">
		<div class="mx-4 grid grid-cols-1  space-y-10 lg:grid-cols-2 lg:space-y-0 lg:space-x-10">
			<Card
				alert="Sold Out!"
				id="hotjava"
				image="/hotjava.jpg"
				imgAlt="hot java cool jazz logo"
				name="Starbucks 26th Annual Hot Java Cool Jazz"
				location="March 31 2023 7PM | The Paramount Theatre"
				buttons={[
					{
						text: "Event Website",
						style: "plain",
						link: "https://www.stgpresents.org/calendar/13775/starbucks-26th-annual-hot-java-cool-jazz"
					},
					{
						text: "Tickets (SOLD OUT!)",
						disabled: true,
						style: "monetized",
						link: "https://my.cheddarup.com/c/bothellmusicboosters/item/4677147"
					}
				]}
			/>
			<Card
				id="ellington"
				image="/ellington.jpg"
				imgAlt="Essentially Ellington Logo"
				name="Essentially Ellington"
				location="May 11th-13th | New York City"
				buttons={[
					{
						text: "Event Website",
						style: "plain",
						link: "https://2023.jazz.org/essentially-ellington"
					},
					{
						text: "Donate",
						style: "monetized",
						link: "https://my.cheddarup.com/c/bothellmusicboosters/item/472496"
					}
				]}
			/>
		</div>
	</div>
</section>
<section>
	<div class="space-y-5">
		<h2 class="bebasneue text-center text-4xl text-white md:text-5xl">Additional Resources</h2>
		<div class="flex w-full flex-col items-center">
			<div class="flex w-full  max-w-2xl flex-col items-center items-stretch space-y-4 text-center">
				{#if browser && navigator.share}
					<button
						on:click={share}
						class="bebasneue mx-3 bg-bothellblue p-3 align-middle text-3xl text-white shadow-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-bothellblue active:translate-y-1 md:text-4xl"
						>Share This Website!</button
					>
				{/if}
				<Buttonlink
					refer={true}
					url="https://www.bothellmusicboosters.org/">Bothell Music Boosters</Buttonlink
				>
				<Buttonlink
					refer={false}
					url="https://www.facebook.com/bothellmusicboosters"
					>Bothell Music Boosters Facebook</Buttonlink
				>
				<Buttonlink
					refer={true}
					url="https://my.cheddarup.com/c/bothellmusicboosters"
					>Bothell Music Boosters Store</Buttonlink
				>
			</div>
		</div>
	</div>
</section>
