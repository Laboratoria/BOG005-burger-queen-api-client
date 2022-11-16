import React, { useState }  from "react";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../petitions/userPetition.js";

const FormLogin = () => {
    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })
    // const [editState, setEditState] = useState(false)

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
                sessionStorage.setItem('user', JSON.stringify(res.data));
                if(res.data.user.role === 'admin'){
                    navigate('/admin')
                } else if (res.data.user.role === 'waiter'){
                    navigate('/waiter')}
                    else if (res.data.user.role === 'chef'){
                        navigate('/chef')}
            })
            .catch(
                // console.log('error validateUser')
                {
                    "error": "string"
                 }
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
                        onChange={handleChange}
                        required
                        value = {dataLogin.email}
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input id="password" // input para el password
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                        value = {dataLogin.password}
                    />


            </form>
                <button onClick={validateUser}>
                    Iniciar Sesión
                </button>

        </div>
    )
}

export default FormLogin;