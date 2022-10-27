import logo from '../resources/logo-bq.png';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import loginUser from '../helpers/axios';
import { useState } from 'react';



console.log('probando data', loginUser())

const Login = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const navegate = useNavigate()
    const { handleSubmit } = useForm()

    const navegatePage = () => {
        navegate('/order')
    }

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputEmail(text);
        console.log(inputEmail)
        setInputPassword(text)
        console.log(inputPassword)
    }

    return (
        <section className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <form typeof='submit' className='formLogin' onSubmit={handleSubmit(navegatePage)}>
                {/* <input className='userName'></input> */}
                <FormInput
                    type='email'
                    onChange={handleInputChange}
                    placeholder='Ingresa tu Email'
                    label='Email'>
                </FormInput>
                <FormInput
                    type='password'
                    onChange={handleInputChange}
                    placeholder='Ingresa tu contraseña'
                    label='Contraseña'>
                </FormInput>
                {/* <input className='passWordUser'></input> */}
                <Button text='Ingresar' type='submit'>
                </Button>
            </form>
        </section>
    );
}

export default Login;