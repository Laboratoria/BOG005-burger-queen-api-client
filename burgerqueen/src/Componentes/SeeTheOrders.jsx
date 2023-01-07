import React from 'react'

const SeeTheOrders = () => {

    const deleteProduct = (deleteFomCart)=>{

    }

    return (
        <section className="containe">
            <div className="divInfo">
                <label htmlFor="" className="infoUsuario"> Nombre
                    <input type="text" name="" id="infoNombre" className="info" />
                </label>
                <label htmlFor="" className="infoUsuario"> Mesa
                    <input type="text" name="" id="infoMesa" className="info" />
                </label>
            </div>
            <section className="vistaOrdenes">

            </section>

            <div className='botones'>
                <button className='confirmar'>Confirmar</button>
                <button className='cancelar' onClick={() => deleteProduct()}>Cancelar</button>

            </div>
        </section>

    )

}
export default SeeTheOrders;