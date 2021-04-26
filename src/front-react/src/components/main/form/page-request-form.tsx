import React from "react";
import UrlControl from "./url-control";
import OptionsControl from "./options-control";
import QueryControl from "./query-control";
import "../../../styles/page-request-form.css"


interface PageRequestFormProps {

}

interface PageRequestFormState {
    url: string,
    followLinks: boolean
    searchQuery?: string
}

class PageRequestForm extends React.Component<PageRequestFormProps, PageRequestFormState> {
    constructor(props: PageRequestFormProps) {
        super(props);
        this.state = {url: "", followLinks: true, searchQuery: "" };

        this.onChangeBool = this.onChangeBool.bind(this);
        this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
        this.onChangeStr = this.onChangeStr.bind(this);
    }

    onChangeStr(e: React.FormEvent<HTMLInputElement>) {
        //TODO Dynamic state name / value
        this.setState({ url: e.currentTarget.value });
    }

    onChangeBool(e: React.FormEvent<HTMLInputElement>) {
        //TODO Dynamic state name / value
        this.setState({followLinks: !this.state.followLinks})
    }

    onChangeSearchQuery(e: React.FormEvent<HTMLInputElement>) {
        //TODO Dynamic state name / value
        this.setState({searchQuery: e.currentTarget.value})
    }

    render() {
       return (
           <div className="page-request-div">
                <UrlControl onUrlChange={this.onChangeStr}/>
                <OptionsControl onOptionChange={this.onChangeBool}/>
                <QueryControl onQueryChange={this.onChangeSearchQuery}/>
           </div>
       )
    }
}

export default PageRequestForm;
