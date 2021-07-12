import React from "react";
import NavButton from "./nav-button";

function Sidebar(): React.ReactElement {
    return(
        <nav className="flex flex-col w-1/3 h-full bg-gray-800 lg:w-1/4">
            <NavButton label="Create Job" to="/create-job"/>
            <NavButton label="Jobs" to="/jobs" />
            <NavButton label="Export" to="/export" />
            <NavButton label="API" to="/api"/>
        </nav>
    )
}

export default Sidebar;
