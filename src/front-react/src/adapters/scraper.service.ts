// TODO Axios api

import {AxiosError, AxiosResponse} from "axios"
import api from "./api";


function fetchList() : Promise<any> {
   return api.get("/pages/")
        .then((response: AxiosResponse) => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            return error;
        })
}

function postScrapeRequest(url: String): Promise<any> {
    return api.post("/page/", {url: url})
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
