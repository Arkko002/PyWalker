import React from "react";

function TableHeader(): React.ReactElement {
  return (
	<div className="flex justify-between px-2 pt-2 font-bold border-b-2">
      <span>Name</span>
      <span>Status</span>
      <span>Scraped pages</span>
      <span>Failed pages</span>
      <span>Empty pages</span>
      <span>Created</span>
    </div>
  )
}

export default TableHeader;
