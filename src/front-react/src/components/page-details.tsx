import React from "react";
import ScrapedPage from "../models/scraped-page";

interface PageDetailsProps {
    page: ScrapedPage
}

class PageDetails extends React.Component<PageDetailsProps, any> {
    render() {
        return (
            <div className="page-details-div">
                {/*TODO*/}
                {this.props.page.url}
                {this.props.page.html}
                {this.props.page.request}
            </div>
        )
    }
}

export default PageDetails;