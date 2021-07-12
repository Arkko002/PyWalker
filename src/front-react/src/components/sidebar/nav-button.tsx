import React from "react";
import {NavLink} from "react-router-dom";

interface NavButtonProps {
    label: string;
    to: string;
}

function NavButton(props: NavButtonProps): React.ReactElement {
    return (
        <NavLink className="px-3 py-2 text-gray-300" activeClassName="bg-gray-900 border-l-4 border-blue-500 shadow-inner" to={props.to}>{props.label}</NavLink>
    )
}

export default NavButton;
