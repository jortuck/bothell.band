import type { PageServerLoad } from "./$types";
import { PUBLIC_API_HOST } from "$env/static/public";
import { API_KEY } from "$env/static/private";
export const prerender: boolean = true;
export const load: PageServerLoad = async ({ params }) => {
	let homePageData: any;
	let eventsData: any;
	try {
		const homePage = await fetch(`${PUBLIC_API_HOST}/api/home-page?populate=*`, {
			headers: {
				Authorization: `Bearer ${API_KEY}`
			}
		});
		const events = await fetch(
			`${PUBLIC_API_HOST}/api/events?populate=*&sort=highlightedEvent:desc`,
			{
				headers: {
					Authorization: `Bearer ${API_KEY}`
				}
			}
		);

		if (homePage.status != 200) {
			homePageData = null;
		} else {
			homePageData = await homePage.json();
		}
		if (events.status != 200) {
			eventsData = null;
		} else {
			eventsData = await events.json();
		}
	} catch (e) {
		eventsData = null;
		homePageData = null;
	}

	return {
		events: eventsData,
		homePage: homePageData
	};
};
