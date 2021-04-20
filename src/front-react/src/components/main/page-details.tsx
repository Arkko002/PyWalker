import React from "react";
import ScrapedPage from "../../models/scraped-page";
import ReactJson from "react-json-view";

interface PageDetailsProps {
    page: ScrapedPage
}

class PageDetails extends React.Component<PageDetailsProps, any> {
    render() {
        return (
            <div className="page-details-div">
                <section className="page-details">
                    <h1>Page details</h1>
                    <input type="text" value={this.props.page.url} readOnly/>
                    <ReactJson src={JSON.parse(this.props.page.html)}/>
                </section>

                <section className="request-details">
                    <h1>Page request details</h1>
                    <input type="text" value={this.props.page.request.code} readOnly/>
                    <ReactJson src={JSON.parse(this.props.page.request.request)}/>
                </section>
            </div>
        )
    }
}

export default PageDetails;