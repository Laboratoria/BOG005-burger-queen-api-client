import React from 'react'
import '../styles/modal.css'

function Modal({ isOpen, closeModal, title, children }) {

  function handleModalContent(event) {
    event.stopPropagation();
  }

  return (
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal} >

      <div className='modal-content' onClick={handleModalContent}>

        <h2>{title}</h2>

        {children}

        <button onClick={closeModal}>
          Cerrar
        </button>

      </div>

    </div>
  );
}

export { Modal }