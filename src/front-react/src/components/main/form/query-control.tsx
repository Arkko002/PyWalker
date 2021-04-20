import React from "react";

interface QueryControlProps {
    onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface QueryControlState {
    query: string
}

class QueryControl extends React.Component<QueryControlProps, QueryControlState> {
    render() {
        return (
            <div className="form-control query-control">
                <label> Search Query
                    <input
                        name="searchQuery"
                        type="text"
                        value={this.state.query}
                        onChange={this.props.onQueryChange}/>
                </label>
            </div>
        )
    }
}

export default QueryControl;