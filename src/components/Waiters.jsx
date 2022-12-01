import { useNavigate } from "react-router-dom";

const Waiters = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>SOY LA VISTA MESEROS</h1>
      <button onClick={() => navigate("/Login")}>REGRESAR</button>
    </div>
  );
}

// email: mesero
// password: 123456

export default Waiters;





// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <select {...register("Rol")}>
//         <option value="Administración">Administración</option>
//         <option value="Mesas">Mesas</option>
//         <option value="Cocina">Cocina</option>
//       </select>
//       <input type="undefined" placeholder="Email" {...register} />
//       <input type="undefined" placeholder="Contraseña " {...register} />

//       <input type="submit" />
//     </form>
//   );
// }

