import React from "react";

interface FormInputProps {
    label: string;
    inputType: string;
    flexCol: Boolean;
}

//TODO Higher order component, accept input type as prop
function FormInput(props: FormInputProps): React.ReactElement {
    const flexDirection = props.flexCol ? "flex flex-col" : "flex";

    return(
        <label className={flexDirection}>
            {props.label}
            <input type={props.inputType}/>
        </label>
    )
}

export default FormInput;
