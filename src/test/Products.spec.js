import { fireEvent, render, screen } from "@testing-library/react"
import { Products } from "../routes/Products.js"
import { getProducts, createProductPost } from '../helpers/axios'
import { BrowserRouter, Route, Routes } from "react-router-dom"

jest.mock('../helpers/axios')

describe('Products component test', () => {

    getProducts.mockImplementation(
        () => {
            return Promise.resolve(
                [{dateEntry: "2022-03-05 15:14:10",
                    id:1,
                    image:"https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
                    name:"Sandwich de jamón y queso",
                    price:1000,
                    type:"Desayuno"}]
            )
        }
    )

    it('Crear producto correctamente', () => {

        // createProductPost.mockImplementation(
        //     () => {

        //     }
        // )

        const newProduct = {
            image: 'https://previews.123rf.com/images/olegtoka/olegtoka1704/olegtoka170400048/76634890-ilustraci%C3%B3n-de-la-ensalada-de-frutas-con-yogur-en-un-taz%C3%B3n.jpg',
            name: 'Ensala de frutas',
            price: '15000',
            type: 'Desayuno'
        }

        const createProduct = (data) => {
            expect(data.image).toEqual(newProduct.image)
            expect(data.name).toEqual(newProduct.name)
            expect(data.price).toEqual(newProduct.price)
            expect(data.type).toEqual(newProduct.type)
        }

        render(<BrowserRouter>
            <Routes> 
                <Route path="/*" element= {<Products createProduct={createProduct} />}/>
            </Routes>
        </BrowserRouter>)

        

        const imageNewProduct = screen.getByRole('textbox', {name: 'image'})
        fireEvent.change(imageNewProduct, {target: {value: newProduct.image}})

        const nameNewProduct = screen.getByRole('textbox', {name: 'name'})
        fireEvent.change(nameNewProduct, {target: {value: newProduct.name}})

        const priceNewProduct = screen.getByRole('textbox', {name: 'price'})
        fireEvent.change(priceNewProduct, {target: {value: newProduct.price}})

        const typeNewProduct = screen.getByRole('textbox', {name: 'type'})
        fireEvent.change(typeNewProduct, {target: {value: newProduct.type}})

        const buttonSubmit = screen.getByRole('button', {name: 'submit'})
        fireEvent.click(buttonSubmit)
    })

})