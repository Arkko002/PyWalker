import React from "react";
import Job from "../../models/job";

interface TableItemProps {
    job: Job;
}

function TableItem(props: TableItemProps): React.ReactElement {
    return(
        <div className="flex justify-between px-2 pt-2 border-b">
            <span>{props.job.name}</span>
            <span>{props.job.status}</span>
            <span>{props.job.scraped_pages}</span>
            <span>{props.job.failed_pages}</span>
            <span>{props.job.empty_pages}</span>
            <span>{props.job.created}</span>
        </div>
    )
}

export default TableItem;
