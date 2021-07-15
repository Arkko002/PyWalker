import React, {useState} from "react";
import ReactJson from "react-json-view";
import Webhook from "../../models/webhook";

interface WebhookCardProps {
    webhook: Webhook;
}

function WebhookCard(props: WebhookCardProps): React.ReactElement {
    let [reciverUrl, setReciverUrl] = useState("");

    return (
        <div className="flex flex-col p-2 m-4 bg-white">
            <div className="flex flex-col w-full pb-4">
                <span className="w-full border-b-2">{props.webhook.name}</span>
                <span>{props.webhook.description}</span>
            </div>
            
            <div className="flex flex-col">
                <span>Example body of the hook response:</span>
                <ReactJson src={props.webhook.bodyExample}/>
            </div>

            <input type="url" placeholder="Enter your reciving endpoint URL here"/>
        </div>
    )
}

export default WebhookCard;
