import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const TOKEN_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2NjkwMzQ4NiwiZXhwIjoxNjY2OTA3MDg2LCJzdWIiOiIyIn0.FhztbvYZ7DYeFAwEk5hYwXBVlbgZ543T9hnh07LhJ8U'

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
    localStorage.getItem(TOKEN_KEY)
}
// codigo jennifer
// const FormLogin = () => {
//     const navigate = useNavigate();
//     const [dataLogin, setDataLogin] = useState({ email: '', password: '' })
//     const handleChange = (e) => {
//         setDataLogin({
//             ...dataLogin,
//             [e.target.name]: e.target.value
//         });
//         return dataLogin
//     }
//     const validateUser = ()=> {
//         loginUser(dataLogin).then( res => {
//             console.log('respuesta',res.data)
//             if(res.data.user.role === 'admin'){
//                 navigate('/admin')
//             }
//         })
//         .catch(
//             //validar con el estatus 404
//             alert('usuario no existe')
//         )
//     }
//     return (
//         <div className="form_container">
//             <form >
//                     <label htmlFor="email">Correo:</label>
//                     <input id="email" // input para el correo
//                         type="email"
//                         name="email"
//                         placeholder="Usuario"
//                         className="email"
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor="password">Contraseña:</label>
//                     <input id="password" // input para el password
//                         type="password"
//                         name="password"
//                         placeholder="Contraseña"
//                         onChange={handleChange}
//                         required
//                     />
//             </form>
//                 <button onClick={validateUser}>
//                     Iniciar Sesión
//                 </button>
//         </div>
//     )
// }
// export default FormLogin;