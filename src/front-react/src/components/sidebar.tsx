import React from "react";
import PageList from "./page-list"
import PageSearch from "./page-search"
import ScrapedPage from "../models/scraped-page";

interface SidebarProps {
    pages: ScrapedPage[]
    onSelectedPageChange: (e: React.MouseEvent<HTMLInputElement>, pageId: number) => void
}

class Sidebar extends React.Component<SidebarProps, any> {
    render() {
        return (
            <div className="sidebar-div">
                <PageSearch/>
                <PageList pages={this.props.pages} onSelectedPageChange={this.props.onSelectedPageChange}/>
            </div>
        )
    }
}

export default Sidebar;