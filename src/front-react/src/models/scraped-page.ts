import PageRequest from "./page-request";

interface ScrapedPage {
    id: number
    url: string
    html: string // TODO Docs, should be stringified JSON
    request: PageRequest
    childPages: ScrapedPage[]

    location: string
}

export default ScrapedPage;