import React, {useState} from "react";

const AddProducto = () => {
    const [producto, setProducto] = useState({
        name: '',
        price: 0,
        image: '',
        tipo:[]
    });

    const handleChenge = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {

        const fr = new FileReader()
        fr.readAsDataURL(e.target.files[0])
        fr.onload = function (carga) {
            const url = carga.currentTarget.result
            setProducto({
                ...producto,
                img: url
            })
        }
    }

    return(
        <div className="formContainer">
            <h1>Nuevo producto</h1>
            <form  
            // onSubmit={handleSubmit}
            >
                <div>
                    <label  htmlFor="name">Nombre:</label>
                    <input id="name"
                        type="texto"
                        name="name"
                        placeholder="Ingresar nombre"
                        // defaultValue={}
                        onChange={handleChenge}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price">Precio:</label>
                    <input id="precio"
                        type="number"
                        className="formInput"
                        name="price"
                        step="1"
                        min="0"
                        placeholder="Ingresar precio"
                        // defaultValue={}
                        onChange={handleChenge}
                        required
                    />
                </div>
                <div >
                    <label htmlFor="img">Imagen:</label>
                    <input type="file"
                        className="formInput"
                        name="img"
                        onChange={handleImage}
                    />
                </div>
                <div>
                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo" // input para el password
                    type="texto"
                    name="tipo"
                    placeholder="tipo"
                    // onChange={handleChange}
                    required
                    // value={}
                    >
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                </select>
                </div>
                <button  type="submit">
                    Guardar Producto
                </button>
            </form>

        </div>
    )
}
export {AddProducto}