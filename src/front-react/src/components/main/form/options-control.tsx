import React from "react";

interface OptionsControlProps {
    onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface OptionsControlState {
    followLinks: boolean
}

class OptionsControl extends React.Component<OptionsControlProps, OptionsControlState> {
	constructor(props: OptionsControlProps) {
		super(props);
		this.state = {followLinks: false}
	}

    render() {
        return (
            <div className="form-control options-control">
				<label htmlFor="follow">Follow links?</label>
				<input
					id="follow"
					name="followLinks"
					type="checkbox"
					onChange={this.props.onOptionChange}/>
            </div>
        )
    }
}

export default OptionsControl;
