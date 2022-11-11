import React, {useState} from "react";
import { createProduct } from "../../../petitions/productPetition";

const AddProducto = () => {
    const [newProducto, setnewProducto] = useState({
        name: '',
        price: 0,
        image: '',
        type:[],
        dateEntry: new Date(),
    });

    const handleChenge = (e) => {
        setnewProducto({
            ...newProducto,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {

        const fr = new FileReader()
        fr.readAsDataURL(e.target.files[0])
        fr.onload = function (carga) {
            const url = carga.currentTarget.result
            setnewProducto({
                ...newProducto,
                image: url
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(newProducto)
        .then(res =>{
            setnewProducto({
                name: '',
                price: 0,
                image: 'url',
                dateEntry: new Date(),
            })
        })
    }

    return(
        <div className="formContainer">
            <h2>Nuevo producto</h2>
            <form  className="form"
             onSubmit={handleSubmit}
            >
                <div className="formGroup">
                    <label  htmlFor="name">Nombre:</label>
                    <input id="name"
                        type="texto"
                        name="name"
                        placeholder="Ingresar nombre"
                        defaultValue={newProducto.name}
                        onChange={handleChenge}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="price">Precio:</label>
                    <input id="precio"
                        type="number"
                        className="formInput"
                        name="price"
                        step="1"
                        min="0"
                        placeholder="Ingresar precio"
                        defaultValue={newProducto.price}
                        onChange={handleChenge}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="img">Imagen:</label>
                    <input type="file"
                        className="formInput"
                        name="img"
                        onChange={handleImage}
                    />
                </div>

                <div className="formGroup">
                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo" // input para el password
                    type="texto"
                    name="tipo"
                    placeholder="tipo"
                    // onChange={handleChange}
                    required
                    value={newProducto.type}
                    >
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                </select>
                </div>
                <button className="btn" type="submit">
                    Guardar Producto
                </button>
            </form>

        </div>
    )
}
export {AddProducto}