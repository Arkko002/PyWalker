import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../styles/App.css';
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import ScrapedPage from "../models/scraped-page";
import ScraperService from "../adapters/scraper.service";
import ErrorBoundary from "../components/error-boundary";

interface AppState {
    pages: ScrapedPage[]
    selectedPage: ScrapedPage
}

class App extends React.Component<any, AppState>{
    constructor(props: any) {
        super(props);

        const defaultPage = {id: 0, url: "", html: "{}", request: {code: 0, request: "{}"}, childPages: [], location: ""}
        this.state = {pages: [], selectedPage: defaultPage}
    }

    componentDidMount() {
        //TODO error handling
        const list = ScraperService.fetchList()
        if (!list === undefined)
        {
            this.setState({pages: list})
        }
    }

    onSelectedPageChange = (e: React.MouseEvent<HTMLInputElement>, pageId: number) : void => {
        const newSelection = this.state.pages.find(p => p.id === pageId)
        if (typeof newSelection === "object") {
            this.setState({selectedPage: newSelection})
        } else {
            // TODO Error handling
        }
    }

    render() {
        return (
            <div className="app-div">
                <BrowserRouter>
                    <ErrorBoundary>
                        <Sidebar pages={this.state.pages}
                                 onSelectedPageChange={this.onSelectedPageChange}/>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <Main page={this.state.selectedPage}/>
                    </ErrorBoundary>
                </BrowserRouter>
            </div>
    )};
}

export default App;
