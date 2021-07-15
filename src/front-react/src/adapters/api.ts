import Axios from "axios";

const BASE_URL = "http://www.localhost:8080"; //TODO

export default Axios.create({
    baseURL: BASE_URL,
    responseType: "json"
});
