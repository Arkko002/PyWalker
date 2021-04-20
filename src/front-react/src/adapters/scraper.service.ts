// TODO Axios api

import Axios from "axios"
import ScrapedPage from "../models/scraped-page";

const BASE_URL = "url" //TODO

var api = Axios.create({
    baseURL: BASE_URL,
    responseType: "json"
})

function fetchList() : any {
    api.get<ScrapedPage[]>("pages/")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            //TODO error handliung
        })
}

function postScrapeRequest(url: String) {
    api.post<ScrapedPage>("page/", {url: url})
        .then((response) => {
           return response.data
        })
        .catch((error) => {
            //TODO error handling
        })
}

export default {
    fetchList,
}