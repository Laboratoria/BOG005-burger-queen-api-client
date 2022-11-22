
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../petitions/userPetition.js";

// const validaForm = (form)=>{}


const FormLogin = () => {
    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })
    // const [editState, setEditState] = useState(false)
    // const [error, setError] = useState ({})

    const handleChange = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        });
        return dataLogin
    }

    const errorMessage = document.getElementById('errorMessage')
    // errorMessage.innerHTML = ''

    
    const validateUser = ()=> {
        loginUser(dataLogin).then( res => {
            console.log('respuesta',res.data)
                sessionStorage.setItem('user', JSON.stringify(res.data));
                if(res.data.user.role === 'admin'){
                    navigate('/admin')
                } 
                else if (res.data.user.role === 'waiter'){
                    navigate('/waiter')}
                else if (res.data.user.role === 'chef'){
                     navigate('/chef')}
            })
            .catch((error) => {

                console.log("QUE ERROR DAS",error.response.data)
                if (error.response.data === 'Email and password are required') {
                    errorMessage.innerHTML = 'Ingresa email y contraseña '
                }
                else if (error.response.data === 'Cannot find user') {
                    errorMessage.innerHTML = 'Usuario no encontrado'
                }
                else if (error.response.data === 'Email format is invalid') {
                    errorMessage.innerHTML = 'Intruduce email valido'
                }
                else if (error.response.data === 'Incorrect password') {
                    errorMessage.innerHTML = 'Contraseña invalida'
                }
                else if (error.response.data === 'Password is too short') {
                    errorMessage.innerHTML = 'Introduce contraseña valida'
                }

        })
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
                        // onBlur={handleBlur}
                        required
                        value = {dataLogin.email}
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input id="password" // input para el password
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        required
                        value = {dataLogin.password}
                    />
        
                    <p id="errorMessage"></p>

            </form>
                <button onClick={validateUser}>
                    Iniciar Sesión
                </button>

        </div>
    )
}

export default FormLogin;