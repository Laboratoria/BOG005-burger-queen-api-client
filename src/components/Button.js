import React from 'react'

const Button = ({ text, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className='btnStyle'>
            {text}
        </button>
    )
}

export default Button