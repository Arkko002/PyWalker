import PageRequest from "./page-request";

class ScrapedPage {
	id: number;
	target_url: string;
	html: string;
	request: PageRequest;
	childPages: ScrapedPage[];
	api_url: string;

	constructor(id: number, target_url: string, html: string, request: PageRequest,
			childPages: ScrapedPage[], api_url: string) {
				this.id = id;
				this.target_url = target_url;
				this.html = html;
				this.request = request;
				this.childPages = childPages;
				this.api_url = api_url;
			};
}

export default ScrapedPage;
