import React, { useState, useEffect } from "react";
import {
    getProductList,
    postNewProduct,
    getProductById,
    patchProduct,
    eraseProduct,
    obtainImgURL
} from "../utils/petitions.js";


function WaiterView () {
    const [products, setProducts] = useState([]);
    const [productToEditModal, setProductToEditModal] = useState();
    const [reloadProducts, setReloadProducts] = useState(false);
    const [nameProduct, setNameProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [typeMenu, setTypeMenu] = useState('')
    const [imgProduct, setImgProduct] = useState('')

    function nameProductHandler(event) {
        setNameProduct(event.target.value)
    }

    function priceProductHandler(event) {
        setPriceProduct(event.target.value)
    }

    function typeMenuHandler(event) {
        setTypeMenu(event.target.value)
    }

    // Consumiendo la petición de imágen para tomar la URL
    async function changeImgURL(event, setImgProduct) {
        const uploadedImg = await event.target.files[0]
        const fr = new FileReader()
        fr.readAsDataURL(uploadedImg)
        fr.onload = () => setImgProduct(fr.result)
        return uploadedImg
    }
    const imgProdctHandler = async (event) => {
        const urlUpload = await changeImgURL(event, setImgProduct)
        console.log('urlUpload', urlUpload)
        const urlImage = await obtainImgURL(urlUpload)
        console.log('urlUpload', urlImage)
        setImgProduct(
            urlImage
        )
    }

    useEffect(() => {
        // petición de la lista de productos
        getProductList()
            .then((response) => {
                console.log(response)
                setProducts(response.data)
            })
            .catch((error) => console.log(error))
    }, [reloadProducts])


    const handleEdit = (id) => {
        console.log('id', id)
        getProductById(id).then((response) => {
            console.log('response', response.data)
            setProductToEditModal(response.data)
            openEditProductModal(true)
        })
    }

    const handleDelete = (id) => {
        eraseProduct(id).then(() => setReloadProducts(!reloadProducts))
    }


    function onSubmitCreateFormHandler(event, nameTyped, priceTyped, typeTyped, imageLoaded) {
        event.preventDefault();
        const priceNumber = parseInt(priceTyped);
        console.log('nameTyped, priceNumber, typeTyped, imageLoaded', nameTyped, priceNumber, typeTyped, imageLoaded)
        postNewProduct(nameTyped, priceNumber, typeTyped, imageLoaded).then(() => {
            closeAddProductModal()
            setReloadProducts(!reloadProducts);
        });
    };

    function onSubmitEditFormHandler(event, nameTyped, priceTyped, typeTyped, imageLoaded, idProduct) {
        event.preventDefault();
        const priceNumber = parseInt(priceTyped);
        patchProduct(nameTyped, priceNumber, typeTyped, imageLoaded, idProduct).then(() => {
            closeEditProductModal();
            setReloadProducts(!reloadProducts);
        });
    };


    return ( // Maqueta componente Admin view
        <main className="adminView">
            <header className="header">
                <div className="headerImg">
                    <img srcSet="/bigFoodsLarge.png" className="headerLogoBig" alt="Burger logo" />
                </div>
                <nav className="navMenu">
                    <ul className="navAMenu">
                        <li><a className="navLink" href="/admin-products">Home</a></li>
                        <li><a className="navLink" href="/admin-usuarios">Ordenes</a></li>
                        <li><a className="navLink" href="/">Salir</a></li>
                    </ul>
                </nav>
            </header>

            <section className="orderProdSect">
                    <section className="orderProdForm">
                        <h2 className="titleOrderProduct">
                            Orden de Pedido
                        </h2>

                        <form className="orderForm" onSubmit={(event) => onSubmitCreateFormHandler(event, nameProduct, priceProduct, typeMenu, imgProduct)} >
                            
                            <p id="textOrder">Número de la orden</p>
                            <input
                                className="orderProductInput"
                                type='text'
                                name="numOrder"
                                onChange={numOrderHandler}
                            />
                            <p id="nameOrder">Nombre del cliente</p>
                            <input
                                className="orderProductInput"
                                type='text'
                                name="nameClientOrder"
                                onChange={nameOrderHandler}
                            />

                            <section className="boxOrderLabel">
                               <thead className="tableOrder">
                               <tr>
                               <th>Nombre</th>
                               <th>Cantidad</th>
                               <th>Precio</th>
                               <th>Eliminar</th>
                                </tr>
                                </thead>
                            </section>
                            <button type="submit" className="addProdModalBtn">
                                Agregar Producto
                            </button>
                            <button className="cancelAddProdBtn">
                                Cancelar
                            </button>
                        </form>
                    </section>
                </section>







        </main>

        

)}

export { WaiterView }