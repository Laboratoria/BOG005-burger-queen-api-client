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

    const handleInputChangeEmail = (e) => {
        const text = e.target.value
        setInputEmail(text);
        console.log(inputEmail)
    }

    const handleInputChangePassword = (e) => {
        const text = e.target.value
        setInputPassword(text);
        console.log(inputPassword)
    }

    const validateUser = async () => {
        // const mitoken = localStorage.getItem('burguertoken')
        await loginUser(inputEmail, inputPassword)
            .then(res => {
                if (res === 200) {
                    navegate('/order')
                }
            })
            .catch(e => {
                alert('usario no encontrado')
            })
    }

    // console.log(validateUser("grace.hopper@systers.xyz", "123456"))

    return (
        <section className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <form typeof='submit' className='formLogin' onSubmit={handleSubmit(validateUser)}>
                <FormInput
                    type='email'
                    onChange={handleInputChangeEmail}
                    required
                    placeholder='Ingresa tu Email'
                    label='Email'>
                </FormInput>
                <FormInput
                    type='password'
                    onChange={handleInputChangePassword}
                    required
                    placeholder='Ingresa tu contraseña'
                    label='Contraseña'>
                </FormInput>
                <Button text='Ingresar' >
                </Button>
            </form>
        </section>
    );
}

export default Login;