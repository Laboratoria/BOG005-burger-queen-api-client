import React, { useState }  from "react";
import loginUser from "../petitions/userPetition";
import { useNavigate } from "react-router-dom"

const FormLogin = () => {
    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        });
        return dataLogin
    }

    const validateUser = ()=> {
        loginUser(dataLogin).then( res => {
            console.log('respuesta',res.data)
           
            if(res.data.user.role === 'admin'){
                navigate('/admin')
            }
            
        })
        .catch(
            //validar con el estatus 404
        )
    }


    return (
        <div className="form_container">
            <form >
                    <label htmlFor="email">Correo:</label>
                    <input id="email" // input para el correo
                        type="email"
                        name="email"
                        placeholder="Usuario"
                        className="email"
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input id="password" // input para el password
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                    />


            </form>
                <button onClick={validateUser}>
                    Iniciar Sesión
                </button>

        </div>
    )
}

export default FormLogin;