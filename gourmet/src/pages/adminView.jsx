import React, { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "../components/addProductModal.jsx"
import { getProductList } from "../utils/petitions.js";
import { ProductComponent } from "../components/productComponent.jsx";


function AdminView() {
    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // petición de la lista de productos
        getProductList()
            .then((response) => {
                console.log(response)
                setProducts(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    // función para crear productos
    function onSubmitFormHandler(event, nameTyped, priceTyped, typeTyped, imageLoaded) {
        event.preventDefault();
        console.log('event, name, price, type, image', nameTyped, priceTyped, typeTyped, imageLoaded)

        setProducts([...products, {
            name: nameTyped,
            price: priceTyped,
            type: typeTyped,
            image: imageLoaded.image
        }]);
    };






    return ( // Maqueta componente Admin view
        <main className="adminView">
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
                <h1 className="titleListProduct">Lista de Productos</h1>
                {products.map((product) => <ProductComponent key={product.name} name={product.name} price={product.price} type={product.type} image={product.image} />)}
            </section>


            <section className="AdminContBtn">
                <AddProductModal
                    isOpen={isOpenAddProductModal}
                    closeModal={closeAddProductModal}
                    onSubmit={onSubmitFormHandler}
                >
                </AddProductModal>
                <button onClick={openAddProductModal} className="addProductBtn">
                    Agregar Producto
                </button>
            </section>

        </main>
    );

}

export { AdminView }
