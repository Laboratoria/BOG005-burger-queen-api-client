import React from 'react'

const Button = ({ text, type }) => {
    return (
        <button
            type={type}
            className='btnStyle'>
            {text}
        </button>
    )
}

export default Button