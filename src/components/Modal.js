import React from 'react'
import './Modal.css'

const Modal = ({isOpen, closeModal, children}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

  return (
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
        <div className='modal_dialog' onClick={handleModalDialogClick}>
            <h1>Editando Producto</h1>
            <button onClick={closeModal}>
                X
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal