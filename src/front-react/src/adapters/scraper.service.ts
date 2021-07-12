// TODO Axios api

import Axios, {AxiosError, AxiosResponse} from "axios"

const BASE_URL = "http://www.localhost:8080" //TODO

var api = Axios.create({
    baseURL: BASE_URL,
    responseType: "json"
})

function fetchList() : any {
    api.get("/pages/")
        .then((response: AxiosResponse) => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            return error;
        })
}

function postScrapeRequest(url: String) {
    api.post("/page/", {url: url})
        .then((response: AxiosResponse) => {
           return response.data;
        })
        .catch((error: AxiosError) => {
            return error;
        })
}

export default {
    fetchList,
    postScrapeRequest
}
