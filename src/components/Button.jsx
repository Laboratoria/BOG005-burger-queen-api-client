import React from "react";

const ButtonInclusive = ({ text, type, onClick, className, children}) => {
    return (
        <button
            type = {type}
            onClick = {onClick}
            className = {className}
        >
            {text}{children}
        </button>
    )
}

export default ButtonInclusive;