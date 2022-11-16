import React, { forwardRef } from 'react'

// en el formulario el {...register(blablabla)} ese ...register me devuelve onChange, onBlur, name y ref
// ese ...register es de useForm (hook de react)
// el forwardRef me sirve para reenviar refs a través de un componente a uno de sus hijos

const FormInput = forwardRef(({ type, name, value, className, placeholder, onBlur, onChange, label, autoComplete, required, error }, ref) => {

    return (
        <>
            <label
                htmlFor='name'
                className='textForm'
            // className={className}
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