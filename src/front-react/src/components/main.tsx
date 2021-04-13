import React from "react";
import PageDetails from "./page-details";
import ScrapedPage from "../models/scraped-page";

interface MainProps {
    page: ScrapedPage
}

class Main extends React.Component<MainProps, any> {
    render() {
        return (
            <div className="main-div">
                <PageDetails page={this.props.page}/>
            </div>
        );
    }
}

export default Main;