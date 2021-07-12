import React from "react";
import Header from "../header";

function CreateJob(): React.ReactElement {
    //TODO Extract main container element into a higher order element
    return (
        <div>
            <Header text="Create New Job"/>

            <div className="flex flex-col px-3 py-2 m-4 bg-white h-4/5">
                <form className="text-center grid grid-cols-2 auto-rows-min gap-3">
                    <label className="flex flex-col">
                        Request Interval
                        <input className="border" type="number" min="1" max="9999"/>
                    </label>

                    <label className="flex flex-col">
                        Page load delay 
                        <input className="border" type="number" min="1" max="9999"/>
                    </label>

                    <label className="flex flex-col">
                        Preset
                        <select className="bg-white border" name="preset" id="preset">
                            <option value="generic">Generic</option>
                            <option value="morele">Morele</option>
                        </select> 
                    </label>

                    <label className="flex items-center justify-center">
                        Use Proxy
                        <input className="mx-2" type="checkbox" id="proxy" name="proxy"/>
                    </label>

                    <div className="flex justify-end w-full pt-4 mt-4 border-t col-span-2">
                        <input className="p-2 mr-2 border rounded-sm focus:shadow-inner" type="button" value="Test scrape"/>
                        <input className="p-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:shadow-inner" type="submit" value="Scrape"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateJob;
