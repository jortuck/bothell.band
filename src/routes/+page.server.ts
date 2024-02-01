import type { PageServerLoad } from "./$types";
import { PUBLIC_API_HOST } from "$env/static/public";
import { API_KEY } from "$env/static/private";

export const load: PageServerLoad = async ({ params }) => {
	const homePage = await fetch(`${PUBLIC_API_HOST}/api/home-page?populate=*`, {
		headers: {
			Authorization: `Bearer ${API_KEY}`
		}
	});
	let homePageData: any;
	if (homePage.status === 404) {
		homePageData = null;
	} else {
		homePageData = await homePage.json();
	}

	return {
		homePage: homePageData
	};
};
