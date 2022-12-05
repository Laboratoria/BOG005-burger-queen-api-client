import React, { useState } from 'react';
import { eraseProduct } from '../utils/petitions.js';

function EraseProductModal(){
    eraseProduct(props.id, props)
    const arrFilterProduct = products.filter(product => product.id !== props.id )
    setProducts(arrFilterProduct)
}

export { EraseProductModal }