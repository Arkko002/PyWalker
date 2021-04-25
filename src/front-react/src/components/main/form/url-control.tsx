import React from "react";

interface UrlControlProps {
    onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface UrlControlState {
}

class UrlControl extends React.Component<UrlControlProps, UrlControlState> {
    render() {
        return (
            <div className="form-control url-control">
				<label htmlFor="url">URL</label>
				<input
					id="url"
					name="url"
					type="text"
					onChange={this.props.onUrlChange}/>
            </div>
        )
    }
}

export default UrlControl;
