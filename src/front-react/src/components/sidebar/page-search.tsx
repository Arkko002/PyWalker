import React from "react";

interface PageSearchProps {
    // TODO
}

interface PageSearchState {
    // TODO
}

class PageSearch extends React.Component<PageSearchProps, any> {
    render() {
       return (
           <div className="page-search-div">
                <input type="text" className="page-search-input"/>
                <input type="submit" className="button submit-button"/>
           </div>
       )
    }
}

export default PageSearch;