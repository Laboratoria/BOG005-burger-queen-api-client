import logo from '../resources/logo-bq.png';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'


const Login = () => {

    const navegate = useNavigate()
    const { handleSubmit } = useForm()

    const navegatePage = () => {
        navegate('/order')
    }

    return (
        <section className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <form typeof='submit' className='formLogin' onSubmit={handleSubmit(navegatePage)}>
                {/* <input className='userName'></input> */}
                <FormInput
                    type='email'
                    placeholder='Ingresa tu Email'
                    label='Email'>
                </FormInput>
                <FormInput
                    type='password'
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