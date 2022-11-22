import React, { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "./addProductModal.jsx"
import { getProductList } from "../utils/petitions.js";

function AdminView() {
    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // petición de la lista de productos
        getProductList()
            .then((response)=> {
                console.log(response)
                setProducts(response.data)
            })
            .catch((error)=> console.log(error))
    },[])

    // función para crear productos
    function onSubmitFormHandler(event, name, price, type, image) {
        event.preventDefault();
        console.log('event, name, price, type, image', event, name, price, type, image)

        setProducts([...products, {
            name,
            price,
            type,
            image: image.image
        }]);
    };
    
    // Cada uno de los productos 
    function Product (props) {
        return(
            <article className="containProduct">
                <img className="productImage" srcSet={props.image} alt={props.name} />
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
    return ( // Maqueta de Admin view
        <div className="adminView">
            <header className="header">
                <div className="headerImg">
                    <img srcSet="/bigFoodsLarge.png" className="headerLogoBig" alt="Burger logo" />
                </div>
                <nav className="navMenu">
                    <ul className="navAMenu">
                        <li><a className="navLink" href="/admin-products">Productos</a></li>
                        <li><a className="navLink" href="/admin-usuarios">Usuarios</a></li>
                        <li><a className="navLink" href="/">Salir</a></li>
                    </ul>
                </nav>
        
            </header>
            {/* // Lista de productos */}
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
