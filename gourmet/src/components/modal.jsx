import React from 'react'
import '../styles/modal.css'

function Modal({ isOpen, closeModal, title, children }) {
  function handleModalContent(event) {
    event.stopPropagation(); //evita la propagación del evento padre
  }
  return (
    // cerrando modal al dar clik fuera del modal con onClick
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal} > 
      {/* evento para evitar que se cierre con click dentro del modal */}
      <div className='modal-content' onClick={handleModalContent}> 

        <h2>{title}</h2>
        {children}
        <button onClick={closeModal} className="closeAddProdBtn">
          Cancelar
        </button>

      </div>

    </div>
  );
}

export { Modal }