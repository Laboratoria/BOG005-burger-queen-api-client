import React from 'react'

const Button = ({ text, type, onClick, className, children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {text}{children}
        </button>
    )
}

export default Button