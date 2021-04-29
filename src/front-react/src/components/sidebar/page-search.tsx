import React from "react";
import "../../styles/page-search.css";

interface PageSearchProps {
    // TODO
}

interface PageSearchState {
    // TODO
}

class PageSearch extends React.Component<PageSearchProps, PageSearchState> {
    render() {
       return (
           <div className="page-search-div">
                <input type="text" placeholder="Type your search query here" className="page-search-input"/>
                <input type="submit" name="Submit" className="btn search-btn"/>
           </div>
       )
    }
}

export default PageSearch;
