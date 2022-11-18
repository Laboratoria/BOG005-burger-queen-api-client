import React, { createContext, useState } from 'react'

export const ProductsContext = createContext(false)

const ProductsProvider = (props) => {

    const [ListProductsTotal, setListProductsTotal] = useState([])

    return (
        <ProductsContext.Provider value={{ ListProductsTotal, setListProductsTotal }}>
            {props.children}
        </ProductsContext.Provider>

    )
}

export default ProductsProvider