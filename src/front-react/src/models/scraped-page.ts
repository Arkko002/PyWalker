import PageRequest from "./page-request";

interface ScrapedPage {
    id: number
    url: string
    html: JSON
    request: PageRequest
    childPages: ScrapedPage[]

    location: string
}

export default ScrapedPage;