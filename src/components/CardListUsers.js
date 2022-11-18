import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { deleteUser, updateUser } from '../helpers/axios'
import Button from './Button'
import FormInput from './FormInput'
import Modal from './Modal'

const CardListUsers = (props) => {

  console.log(props)
  const [openModal, setOpenModal] = useState(false)
  const [userUpdate, setUserUpdate] = useState({ email: props.email, password: props.password, role: props.role });

  const mitoken = localStorage.getItem('tokenUser')



  const handleDelete = async () => {
      Swal.fire({
          title: 'Está seguro de que desea eliminar éste usuario?',
          text: "No podrá recuperar el usuario eliminado!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'sí, eliminar usuario!'
      }).then((result) => {
          if (result.isConfirmed) {
              // console.log("eliminando usuario", user.email)
              deleteUser(mitoken, props, props.id).then((resDelete) => {
                  // console.log(resDelete)
                  if (resDelete.status === 200) {
                      // alert('Producto eliminado')
                      Swal.fire(
                          'Exito!',
                          'El usuario se eliminó correctamente!',
                          'success'
                      )
                  } else {
                      // alert('No se elimino el producto')
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Algo ocurrió y no se pudo crear el usuario!'
                      })
                  }
              })

          }
      })
  }

  const handleEdit = () => {
      setOpenModal(true)
  }

  const handleChange = (e) => {
      console.log('me estoy ejecutando')
      setUserUpdate({
          ...userUpdate,
          [e.target.name]: e.target.value
      })
  }

  const closeModal = () => {
      setOpenModal(false)
  }

  const updateUsertNow = async () => {
      const res = await updateUser(mitoken, userUpdate, props.id)
      console.log(res)
      if (res.status === 200) {
          alert('Usuario editado')
      } else {
          alert('No se edito el usuario')
      }
      closeModal()
  }

  return (
    
    <>
    <div className='usersContainer'>
        <p>{props.email}</p>
        <p type='password'>*******</p>
        <p>{props.role}</p>
    </div>
    <div className='btnContainerUsers'>
        <Button className='btnEditAdmonUsers' text='Edit' onClick={handleEdit} />
        <Modal
            isOpen={openModal}
            closeModal={closeModal}
        >
            <p>Editar Usuario</p>
            <FormInput
                                className='inputEmailUser'
                                type='email'
                                name='email'
                                required
                                placeholder='Email Nuevo usuario'
                                value={userUpdate.email}
                                onChange={handleChange}
                            >
                            </FormInput>
                            <FormInput
                                className='inputPasswordUser'
                                type='password'
                                name='password'
                                required
                                placeholder='Contraseña'
                                value={userUpdate.password}
                                onChange={handleChange}
                            >
                            </FormInput>
                            <select className='SelectRolUser' name='role' onChange={handleChange} >
                                <option value='seleccion tipo' >Selecciona tipo</option>
                                <option value='Mesero'>Mesero</option>
                                <option value='Chef'>Chef</option>
                                <option value='Administrador'>Administrador</option>
                            </select>
            <div className='optionsModal'>
                <Button onClick={updateUsertNow} text="Aceptar" className="btnEditAdmonUser" />
                <Button onClick={closeModal} text="Cancelar" className="btnEditDeleteUser" />
            </div>

        </Modal>
        <Button className='btnEditDeleteUser' text='Elim' onClick={handleDelete} />
    </div>
</>
  )
}

export default CardListUsers