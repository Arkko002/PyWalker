import Webhook  from "../models/webhook";
import api from "./api"

function getWebhookList(): Promise<Webhook[]> {
    return api.get<Webhook[]>("/webhooks")
            .then(res => {
                return res.data;
            });
}

function subscribeToWebhook(webhook: Webhook) {
    return api.post(webhook.url)
            .then(res => {
                return res.data;
            })
}

export {
    getWebhookList,
    subscribeToWebhook
}
