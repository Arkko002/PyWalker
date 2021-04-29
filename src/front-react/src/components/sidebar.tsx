import React from "react";
import ScrapedPage from "../models/scraped-page";
import PageSearch from "./sidebar/page-search";
import PageList from "./sidebar/page-list";
import "../styles/sidebar.css"

interface SidebarProps {
    pages: ScrapedPage[]
    onSelectedPageChange: (e: React.MouseEvent<HTMLInputElement>, pageId: number) => void
}

class Sidebar extends React.Component<SidebarProps, any> {
    render() {
        return (
            <div className="sidebar-div" role="sidebar">
                <PageSearch/>
                <PageList pages={this.props.pages} onSelectedPageChange={this.props.onSelectedPageChange}/>
            </div>
        )
    }
}

export default Sidebar;
