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

					<div className="details-controls-div">

						<input type="text" value={this.props.page.target_url} readOnly/>
					</div>
                    <ReactJson src={JSON.parse(this.props.page.html)}/>
                </section>

                <section className="request-details">
                    <h1>Page request details</h1>
					<div className="details-controls-div">
						<input type="text" value={this.props.page.request.code} readOnly/>
					</div>
                    <ReactJson src={JSON.parse(this.props.page.request.request)}/>
                </section>
            </div>
        )
    }
}

export default PageDetails;
