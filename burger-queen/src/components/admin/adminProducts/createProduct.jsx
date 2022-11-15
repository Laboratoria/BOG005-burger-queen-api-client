import React , {useState} from "react";
import { createProduct, editProduct, listProducts } from "../../../petitions/productPetition";
import { BurgerContext } from "../../../context/indexContext";
import axios from "axios";

const AddProducto = () => {
    const [imgPreview, setImgPreview]= useState(null)

    const {
        newProduct,
        setnewProduct,
        editProductState,
        setEditProductState,
        // openModal,
        setOpenModal,
        setProducts,
    } = React.useContext(BurgerContext);

    const handleChenge = (e) => {
        setnewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };
    //subir imagen a la web y obtener url 
async function uploadImgWeb (img) {

    const form = new FormData();
    form.append('image', img);
    console.log('img', typeof img);

    const apiKey = 'fc4cacd19eee783715a306dd5dc7c876'
  
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`

    const petition = {
        method: 'POST',
        body: form
    }

    const response = await fetch(url,petition) 
    console.log('DEVUEL ALGO', response);
    const dataResponse = await response.json()

    console.log('URL IMAGEN >>>>', dataResponse.data.url )
     return dataResponse.data.url
}

const onChangeImg = async (e , setImgPreview) => {
    const uploadedImg = await e.target.files[0]
        const fr = new FileReader()
        fr.readAsDataURL(uploadedImg)
        fr.onload = ()=> setImgPreview(fr.result)
        console.log("QUE DEVUELVES", fr)
        return uploadedImg
  }

    const handleImage = async (e) => {
        const urlImgUpload = await onChangeImg(e, setImgPreview)
        const urlImageWeb = await uploadImgWeb(urlImgUpload)
        setnewProduct({
                    ...newProduct,
                    image: urlImageWeb
                })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editProductState === false) {
            console.log('new', newProduct);
            createProduct(newProduct)
                .then(
                    res => {
                    listProducts().then(res => {
                        setProducts(res.data.map((product) => {
                            return {
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                type: product.type,
                                id: product.id
                            }
                        }))
                    })}
                    // res => {
                    //     setnewProduct({
                    //         name: '',
                    //         price: 0,
                    //         image: 'url',
                    //         dateEntry: new Date(),
                    //     })
                    // }
                )
                .catch(error => {
                    console.error(error)
                })
            setOpenModal(false);
        // })
    }
        else if (editProductState === true) {
            console.log('que llega',newProduct);
    editProduct(newProduct.id, newProduct)
        .then(res => {
            listProducts().then(res => {
                setProducts(res.data.map((product) => {
                    return {
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.type,
                    }
                }))
            })
        })
        .catch(error => {
            console.error(error)
        })
    setOpenModal(false);
    setEditProductState(false)
}
    }
const onCancel = () => {
    setOpenModal(false);
    setEditProductState(false)
}

return (
    <div className="formContainer createUser">
        <h2>Nuevo producto</h2>
        <form className="form createUserForm"
            onSubmit={handleSubmit}
        >
            {/* <div className="formGroup"> */}
                <label htmlFor="name">Nombre:</label>
                <input id="name"
                    type="texto"
                    name="name"
                    placeholder="Ingresar nombre"
                    defaultValue={newProduct.name}
                    // value={newProduct.name}
                    onChange={handleChenge}
                    required
                />
            {/* </div> */}

            {/* <div className="formGroup"> */}
                <label htmlFor="price">Precio:</label>
                <input id="precio"
                    type="number"
                    className="formInput"
                    name="price"
                    step="1"
                    min="0"
                    placeholder="Ingresar precio"
                    defaultValue={newProduct.price}
                    onChange={handleChenge}
                    required
                />
            {/* </div> */}
            <div className="formGroup">
                <label htmlFor="img">Imagen:</label>
                <input type="file"
                    className="formInput"
                    name="img"
                    onChange={handleImage}
                />
                 <img src={imgPreview} alt="imgPreview" className="imgPreview"/>
            </div>

            {/* <div className="formGroup"> */}
                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo" // input para el password
                    type="texto"
                    name="tipo"
                    placeholder="tipo"
                    // onChange={handleChange}
                    required
                    // defaultValue= 'Desayuno'
                    value={newProduct.type}
                >
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                </select>
            {/* </div> */}
            <div className="btns">
            <button type="submit"
             className="btnProduct">
                Guardar
            </button>
            <button
                type="button"
                className="btnProduct"
                onClick={onCancel}
            >
                Cancelar
            </button>
            </div>
        </form>

    </div>
)
}
export { AddProducto }