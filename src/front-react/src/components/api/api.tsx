import React, {useEffect, useState} from "react";
import Webhook from "../../models/webhook";
import {getWebhookList} from "../../adapters/webhook.service";
import WebhookCard from "./webhook-card";
import Header from "../header";

//TODO Cacheing
function Api(): React.ReactElement {
    let [webhooks, setWebhooks] = useState(Array<Webhook>())

    useEffect(() => {
        getWebhookList().then(webhooks => {
            setWebhooks(webhooks);
        }).catch(err => {
            //TODO Error redux state
        });
    }, []);

    let webhookCards;
    webhookCards = webhooks.map(item => {
        return <WebhookCard webhook={item}/>
    });

    return(
        <div className="flex flex-col">
            <Header text="Subscribe to webhooks"/>
            {webhookCards}
        </div>
    )
}

export default Api;
