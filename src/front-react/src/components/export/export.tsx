import React from "react";
import Header from "../header";

function Export(): React.ReactElement {
    return(
        <div>
            <Header text="Configure automatic data export" />

            <div className="flex flex-col px-3 py-2 m-4 bg-white">
                <span>Here you can link your Dropbox account to automatically recive scraping result uploads to a separate <b>WebScrapper</b> folder. We will only have access to this folder and not your entire Dropbox account.</span>

                        <input className="p-2 mt-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:shadow-inner" type="submit" value="Link your account"/>
            </div>

        </div>
    )
}

export default Export;
