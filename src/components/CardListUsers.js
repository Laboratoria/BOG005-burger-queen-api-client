import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { deleteUser, updateUser } from '../helpers/axios'
import Button from './Button'
import FormInput from './FormInput'
import Modal from './Modal'

const CardListUsers = ({ user, setListUsersTotal }) => {


    const [openModal, setOpenModal] = useState(false)
    const [userUpdate, setUserUpdate] = useState({ email: user.email, password: user.password, role: user.role, id: user.id });

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
                deleteUser(user, user.id).then((resDelete) => {
                    if (resDelete.status === 200) {
                        Swal.fire(
                            'Exito!',
                            'El usuario se eliminó correctamente!',
                            'success'
                        )
                        setListUsersTotal((lista) => lista.filter(u => u.id !== user.id))
                    } else {
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
        setUserUpdate({
            ...userUpdate,
            [e.target.name]: e.target.value
        })
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    const updateUsertNow = async () => {
        const res = await updateUser(userUpdate, user.id)
        if (res.status === 200) {
            Swal.fire(
                'Bien hecho!',
                'El usuario se editó con éxito!',
                'success'
            )
            setListUsersTotal((lista) => lista.map(u => {
                return (u.id === user.id) ? userUpdate : u
            }))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ocurrió y no se pudo editar el usuario!'
            })
        }
        closeModal()
    }

    return (
        <>
            <div className='usersContainer'>
                <p>{user.email}</p>
                <p type='password'>*******</p>
                <p>{user.role}</p>
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
                        placeholder='Ingresa la nueva contraseña'
                        value={userUpdate.password}
                        onChange={handleChange}
                    >
                    </FormInput>
                    <select defaultValue={user.role} className='SelectRolUser' name='role' onChange={handleChange} >
                        <option value={user.role} disabled>{user.role}</option>
                        <option value='Mesero' >Mesero</option>
                        <option value='Chef' >Chef</option>
                        <option value='Admin' >Admin</option>
                    </select>
                    <div className='optionsModal'>
                        <Button onClick={updateUsertNow} text="Aceptar" className="btnEditAdmonUserModal" />
                        <Button onClick={closeModal} text="Cancelar" className="btnEditDeleteUser" />
                    </div>

                </Modal>
                <Button className='btnEditDeleteUser' text='Elim' onClick={handleDelete} />
            </div>
        </>
    )
}

export default CardListUsers