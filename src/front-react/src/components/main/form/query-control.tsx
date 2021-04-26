import React from "react";

interface QueryControlProps {
    onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface QueryControlState {
    query: string
}

class QueryControl extends React.Component<QueryControlProps, QueryControlState> {
	constructor(props: QueryControlProps) {
		super(props);
		this.state = {query: ""}
	}

    render() {
        return (
            <div className="form-control query-control">
				<label htmlFor="query">Search Query</label>
				<input
					id="query"
					name="searchQuery"
					type="text"
					onChange={this.props.onQueryChange}/>
            </div>
        )
    }
}

export default QueryControl;
