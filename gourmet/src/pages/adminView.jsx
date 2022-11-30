import React, { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "../components/addProductModal.jsx"
import { EditProductModal } from "../components/editProductModal.jsx"
import { getProductList, postNewProduct, getProductById, patchProduct } from "../utils/petitions.js";
import { ProductComponent } from "../components/productComponent.jsx";


function AdminView() {
    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal();
    const [isOpenEditProductModal, openEditProductModal, closeEditProductModal] = useModal();
    const [products, setProducts] = useState([]);
    const [productToEditModal, setProductToEditModal] = useState()

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
    function onSubmitCreateFormHandler(event, nameTyped, priceTyped, typeTyped, imageLoaded) {
        event.preventDefault();
        const priceNumber = parseInt(priceTyped);
        console.log('nameTyped, priceNumber, typeTyped, imageLoaded',nameTyped, priceNumber, typeTyped, imageLoaded)
        postNewProduct(nameTyped, patchProduct, priceNumber, typeTyped, imageLoaded).then(
            closeAddProductModal()
        );
       
        setProducts([...products, {
            name: nameTyped,
            price: priceTyped,
            type: typeTyped,
            image: imageLoaded
        }]);
    };

    function onSubmitEditFormHandler(event, nameTyped, priceTyped, typeTyped, imageLoaded, idProduct) {
        event.preventDefault();
        const priceNumber = parseInt(priceTyped);
        patchProduct(nameTyped, priceNumber, typeTyped, imageLoaded, idProduct).then(
            closeAddProductModal()
        );
       
        // setProducts([...products, {
        //     name: nameTyped,
        //     price: priceTyped,
        //     type: typeTyped,
        //     image: imageLoaded
        // }]);
    };
    

    const handelEdit = (id) => {
        console.log('id', id)
        getProductById(id).then((response) => {
            console.log('response', response.data)
            setProductToEditModal(response.data)
            openEditProductModal(true)
        })
    }

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
                {products.map((product) => <ProductComponent onClick={handelEdit} key={product.id} id={product.id} name={product.name} price={product.price} type={product.type} image={product.image} />)}
            </section>
            {productToEditModal && (<section className="AdminContBtn">
                <EditProductModal
                    isOpen={isOpenEditProductModal}
                    closeModal={closeEditProductModal}
                    onSubmit={onSubmitEditFormHandler}
                    product={productToEditModal}
                >
                </EditProductModal>
            </section>)}
            <section className="AdminContBtn">
                <AddProductModal
                    isOpen={isOpenAddProductModal}
                    closeModal={closeAddProductModal}
                    onSubmit={onSubmitCreateFormHandler}
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
