import React, { useState } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "./addProductModal.jsx"

function AdminView() {
    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal()

    // lista de productos
    const [products, setProducts] = useState([]);
    function onSubmitFormHandler(event, name, price, type, image) {
        event.preventDefault();

        setProducts([...products, {
            name,
            price,
            type,
            image
        }]);
    };

    //const [isOpenEditProductModal, openEditProductModal, closeEditProductModal] = useModal()

    function Product (props) {
        return(
            <article>
                <section className="sectionImg">
                <img srcSet="/hamburger.png" className="logoMobile" alt="imgBurger" />
                </section>
                <div>
                    <p>{props.type}</p>
                    <p>{props.name} <span>{props.price}</span></p>
                </div>
                <div>
                    <i className="fa-solid fa-pencil"></i>
                    <i className="fa-solid fa-trash-can-xmark"></i>
                </div>
            </article>
        )
    }
    return (
        <div className="adminView">
            <header className="header">
                <div className="headerImg">
                    <img src="/bigFoodsLarge.png" className="headerLogoBig" alt="Burger logo" />
                </div>
                <nav className="navMenu">
                    <ul className="navAMenu">
                        <li><a className="navLink" href="/admin-products">Productos</a></li>
                        <li><a className="navLink" href="/admin-usuarios">Usuarios</a></li>
                        <li><a className="navLink" href="/">Salir</a></li>
                    </ul>
                </nav>
        
            </header>

            <section className="productsList">
               
                <h1>Lista de Productos</h1>
                {products.map((product) => <Product key={product.name} name={product.name} price={product.price} type={product.type} image={product.image}  />)}
               
                <button onClick={openAddProductModal} className="addProducts">
                    Agregar Productos
                </button>

                <AddProductModal
                    isOpen={isOpenAddProductModal}
                    closeModal={closeAddProductModal}
                    onSubmit={onSubmitFormHandler}
                >
                </AddProductModal>
            </section>
        </div>
    );

    < section  >

        <section className="header">
            <div className="headerImg">
                <img src="/burger-queen-logo.png" className="headerLogo" alt="Burger logo" />
                <img src="/burger-queen-header.png" className="headerLogoBig" alt="Burger logo" />
            </div>

            <nav className="navMenu"></nav>
            {/* Menú de navegació en react */}
        </section>

        <section className="productsList">
            {/* componente de productos */}
        </section>

        <section className="addProdModal">
            {/* form para crear productos  */}
        </section>

        <section className="editProdModal">
            {/* form para crear productos  */}
        </section>

    </section >
}

export { AdminView }
