import React from "react";

interface OptionsControlProps {
    onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface OptionsControlState {
    followLinks: boolean
}

class OptionsControl extends React.Component<OptionsControlProps, OptionsControlState> {
    render() {
        return (
            <div className="form-control options-control">
                <label> Follow links?
                    <input
                        name="followLinks"
                        type="checkbox"
                        checked={this.state.followLinks}
                        onChange={this.props.onOptionChange}
                    />
                </label>
            </div>
        )
    }
}

export default OptionsControl;