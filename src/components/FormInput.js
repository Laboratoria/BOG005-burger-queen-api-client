import React, { forwardRef } from 'react'

const FormInput = forwardRef(({ type, name, value, className, placeholder, onBlur, onChange, label, autoComplete, required, error }, ref) => {

    return (
        <>
            <label
                htmlFor='name'
                className='textForm'
            >
                {label}
            </label>
            <input
                className={className}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
                autoComplete={autoComplete}
                required={required}
                value={value}
            />
        </>
    )
})



export default FormInput;