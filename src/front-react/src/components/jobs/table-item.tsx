import React from "react";
import Job from "../../models/job";

interface TableItemProps {
    job: Job;
}

function TableItem(props: TableItemProps): React.ReactElement {
    return(
        <div className="flex">
            <span>props.job.name</span>
            <span>props.job.created</span>
        </div>
    )
}

export default TableItem;
