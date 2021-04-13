import React from "react";
import ScrapedPage from "../models/scraped-page";

interface PageListProps {
    pages: ScrapedPage[]
    onSelectedPageChange: (e: React.MouseEvent<HTMLInputElement>, pageId: number) => void
}

interface PageListState {
    selectedPageIndex: number
}

class PageList extends React.Component<PageListProps, PageListState> {
    constructor(props : PageListProps) {
        super(props);
    }

    render() {
        let buttonClass = "list-button";

        const items = this.props.pages.map((page, index) =>
            <li className="page-list-item" key={index}>
                { this.state.selectedPageIndex === index ? buttonClass += "list-button-active" : buttonClass }
                <input type="button" className={buttonClass} onClick={(e) => this.props.onSelectedPageChange(e, index)}>
                        <span className="page-list-name">
                            {/*TODO human readable names from head*/}
                            {page.childPages.length} {page.url}
                        </span>
                </input>
            </li>
        );

        return (
            <ul className="page-list">
                {items}
            </ul>
        )
    }
}

export default PageList;