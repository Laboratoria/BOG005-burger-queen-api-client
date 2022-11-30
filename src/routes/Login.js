import logo from '../resources/logo-bq.png';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import loginUser from '../helpers/axios';
import { useState } from 'react';

const Login = () => {

    const navegate = useNavigate()
    const { handleSubmit } = useForm()
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    const handleInputChangeEmail = (e) => {
        const text = e.target.value
        setInputEmail(text);
    }

    const handleInputChangePassword = (e) => {
        const text = e.target.value
        setInputPassword(text);
    }

    const validateUser = () => {
        loginUser(inputEmail, inputPassword).then(res => {
            if (res.data.user.role === 'admin') {
                navegate('/admin')
            } else if (res.data.user.role === 'Mesero') {
                navegate('/order')
            } else if (res.data.user.role === 'Chef') {
                navegate('/orderStateChef')
            }
        })
            .catch((error) => {

                if (error.response.data === 'Email and password are required') {
                    setErrorLogin('Ingresa email y contraseña ')
                }
                else if (error.response.data === 'Cannot find user') {
                    setErrorLogin('Usuario no encontrado')
                }
                else if (error.response.data === 'Email format is invalid') {
                    setErrorLogin('Intruduce email valido')
                }
                else if (error.response.data === 'Incorrect password') {
                    setErrorLogin('Contraseña invalida')
                }
                else if (error.response.data === 'Password is too short') {
                    setErrorLogin('Introduce contraseña valida')
                }
            })
    }

    return (
        <section className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <form typeof='submit' className='formLogin' autoComplete="on" onSubmit={handleSubmit(validateUser)}>
                <FormInput
                    type='email'
                    onChange={handleInputChangeEmail}
                    required
                    placeholder='Ingresa tu Email'
                    className='emailInput'
                    label='Email'
                    data-testid='login-email-input'>
                </FormInput>
                <FormInput
                    className='passwordInput'
                    type='password'
                    onChange={handleInputChangePassword}
                    required
                    placeholder='Ingresa tu contraseña'
                    label='Contraseña'
                    data-testid='login-password-input'>
                </FormInput>
                <Button text='Ingresar' className='btnStyleLogin'>
                </Button>
                <p>{errorLogin}</p>
            </form>
        </section>
    );
}

export default Login;