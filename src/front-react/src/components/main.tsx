import React from "react";
import PageDetails from "./main/page-details";
import ScrapedPage from "../models/scraped-page";
import { Switch, Route } from "react-router-dom";
import PageRequestForm from "./main/form/page-request-form";
import "../styles/main.css"

interface MainProps {
    page: ScrapedPage
}

class Main extends React.Component<MainProps, any> {
    render() {
        return (
            <div className="main-div" role="main">
                <Switch>
                    <Route path="/new-request">
                        <PageRequestForm/>
                    </Route>
                    <Route path={"/details/:id"}>
                        <PageDetails page={this.props.page}/>
                    </Route>
                        {/*todo default path /*/}
                </Switch>
            </div>
        );
    }
}

export default Main;
