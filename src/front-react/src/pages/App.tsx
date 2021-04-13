import React from 'react';
import './App.css';
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import ScrapedPage from "../models/scraped-page";
import ScraperService from "../adapters/scraper.service";

interface AppState {
    pages: ScrapedPage[]
    selectedPage: ScrapedPage
}

class App extends React.Component<any, AppState>{
    constructor(props: any) {
        super(props);

        //TODO default page
        let defaultPage = {id: 0, url: "", html: JSON,
            request: {code:0, request: JSON},
            childPages: Array<ScrapedPage>(),
            location: ""}

        this.state = {pages: ScraperService.fetchList(), selectedPage: defaultPage}
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
            <div className="App">
                <Sidebar pages={this.state.pages} onSelectedPageChange={this.onSelectedPageChange}/>
                <Main page={this.state.selectedPage}/>
            </div>
    )};
}

export default App;
