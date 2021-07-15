import {AxiosResponse, AxiosError} from "axios";
import api from "./api";

//TODO better response type, differentate network and internal errors etc.
async function sendAuthRequest(code: string): Promise<boolean> {
    try {
        const response = await api.post("/authorize-dropbox", {code: code});
        if (response.status === 200) {
            return true;
        };
        return false;
    } catch (error) {
        return false;
    }
}

export {
    sendAuthRequest,
};
