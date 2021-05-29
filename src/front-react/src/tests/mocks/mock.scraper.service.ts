import * as axios from 'axios';
import PageRequest from "../../models/page-request";
import ScrapedPage from "../../models/scraped-page";

const API_URL = "http://www.localhost:8080" //TODO store url in config


function createMockList() {
	let root_request = new PageRequest(200, "{\"root_request\": \"asd\"}");
	let child_pages = [new ScrapedPage(11, "child_url1", "{\"child_html1\": \"asd\"}", root_request, [], "api_url11")];

	let root_page1 = new ScrapedPage(1, "root_url1", "{\"root_html\": \"asd\"}", root_request, child_pages, "api_url1");
	let root_page2 = new ScrapedPage(2, "root_url2", "{\"root_html\": \"asd\"}", root_request, child_pages, "api_url1");
	let root_page3 = new ScrapedPage(3, "root_url3", "{\"root_html\": \"asd\"}", root_request, child_pages, "api_url1");

	return [root_page1, root_page2, root_page3];
}

export default {
	createMockList,
	API_URL
}
