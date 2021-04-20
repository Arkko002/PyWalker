import React from "react";
import {Link, NavLink} from "react-router-dom";
import ScrapedPage from "../../models/scraped-page";

interface PageListProps {
    pages: ScrapedPage[]
    onSelectedPageChange: (e: React.MouseEvent<HTMLInputElement>, pageId: number) => void
}

interface PageListState {
    selectedPageIndex: number
}

class PageList extends React.Component<PageListProps, PageListState> {
    render() {
        //TODO NavLink active css
        const items = this.props.pages.map(page =>
            <li className="page-list-item" key={page.id}>
                <NavLink to={`/page/${page.id}`}>
                    <input
                        type="button"
                        value={page.url}/>
                </NavLink>
            </li>
        );

        return (
            <div className="page-list-div">
                <Link to="/create-request">
                    <input type="button" className="btn create-request-btn" value="New Request"/>
                </Link>

                <ul className="page-list">
                    {items}
                </ul>
            </div>
        )
    }
}

export default PageList;