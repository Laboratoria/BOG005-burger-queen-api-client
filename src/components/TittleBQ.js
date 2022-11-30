import React from 'react'

const TittleBQ = () => {

  const emailUserHeader = localStorage.getItem('userEmail')
  const roleUserHeader = localStorage.getItem('userRole')

  return (
    <>
      <div className='tittleBQ'>
        <h1>BURGER QUEEN</h1>
        <h2>SISTEMA DE PEDIDOS</h2>
      </div>
      <div className='contP'>
        <p>{emailUserHeader} / {roleUserHeader}</p>
      </div>
    </>
  )
}

export default TittleBQ