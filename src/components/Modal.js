import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, closeModal, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className='modal_dialog' onClick={handleModalDialogClick}>
                <Button onClick={closeModal} className="closeButtonModal">
                    <FontAwesomeIcon icon={faCircleXmark} className="iconCloseModal" />
                </Button>
                {children}
            </div>
        </div>
    )
}

export default Modal