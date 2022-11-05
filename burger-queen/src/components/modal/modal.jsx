// import React from "react";
// import ReactDOM from 'react-dom/client';
// import { createPortal } from 'react-dom';
import PortalReactDOM from 'react-dom'
import styles from './styles.scss'

function Modal({ children }) {
    return PortalReactDOM.createPortal(
        <div className='modalContainer'>
            {children}
        </div>,
        document.getElementById('modal')
  )
  }
  
export { Modal }