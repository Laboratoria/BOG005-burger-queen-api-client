
 import React from "react";


  const Form = () => {
     return (

         <form className='form-login'>
       <div className='form-container'>

         <input
           type='email'
           placeholder='Correo Electrónico'
           name='username' />

         <input
           type='password'
          placeholder='Contraseña'
          name='pass' />     
          
           <button className='btn-login'>Ingresar</button>

          </div>
     </form>

    )
 }

 export default Form;