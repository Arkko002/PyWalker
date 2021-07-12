import React from "react";

interface HeaderProps {
    text: string;
}

function Header(props: HeaderProps) {
    return(
        <h1 className="pt-2 pb-4 mx-2 border-b-2">{props.text}</h1>
    )
}

export default Header;
