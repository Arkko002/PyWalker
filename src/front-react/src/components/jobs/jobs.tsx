import React from "react";
import TableHeader from "./table-header";
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";
import TableItem from "./table-item";
import Header from "../header";

function Jobs(): React.ReactElement {
    const jobs = [
        {name:"Job1", status: "Running", scraped_pages: 1, failed_pages: 1, empty_pages: 1, created: Date.now()},
        {name:"Job2", status: "Running", scraped_pages: 2, failed_pages: 2, empty_pages: 2, created: Date.now()},
        {name:"Job3", status: "Running", scraped_pages: 3, failed_pages: 3, empty_pages: 3, created: Date.now()},
        {name:"Job4", status: "Running", scraped_pages: 4, failed_pages: 4, empty_pages: 4, created: Date.now()},
    ]
    // const jobs = useSelector((state: RootState) => state.jobs)

    let tableItems;
    if(jobs.length > 0) {
        tableItems = jobs.map(job =>
            <TableItem job={job}/>
        )
    } else {
        tableItems = <label className="flex items-center justify-center h-full mt-4 text-xl opacity-40">There is no jobs to display</label>
    }

    return(
        <div className="flex flex-col h-full">
            <Header text="Scraping Jobs"/>

            <div className="flex flex-col px-3 py-2 m-4 bg-white">
                <TableHeader/>
                {tableItems}
            </div>

        </div>
    )
}

export default Jobs;
