import React from "react";
import {Link, NavLink} from "react-router-dom";
import ScrapedPage from "../../models/scraped-page";
import "../../styles/page-list.css"


interface PageListProps {
    pages: ScrapedPage[]
    onSelectedPageChange: (e: React.MouseEvent<HTMLInputElement>, pageId: number) => void
}

interface PageListState {
    selectedPageIndex: number
}

class PageList extends React.Component<PageListProps, PageListState> {
	constructor(props: PageListProps) {
		super(props);
	}
	
	handlePageChange(e: React.MouseEvent<HTMLInputElement>) {
		this.props.onSelectedPageChange(e, this.state.selectedPageIndex)
	}

    render() {
        //TODO NavLink active css
        const items = this.props.pages.map(page =>
            <li className="page-list-item" key={page.id}>	
                <NavLink to={`/details/${page.id}`} activeClassName="btn--active">
                    <input
                        type="button"
						className="btn"
                        value={page.target_url}
						onClick={(e) => this.props.onSelectedPageChange(e, page.id)}/>
                </NavLink>
            </li>
        );

        return (
            <div className="page-list-div">
                <Link to="/new-request">
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
