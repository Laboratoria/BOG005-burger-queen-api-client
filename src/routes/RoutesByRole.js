import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Administration from './Administration'
import Order from './Order'
import OrderState from './OrderState'
import { Products } from './Products'
import { Users } from './Users'

const RoutesByRole = () => {

    const userActived = localStorage.getItem('userRole')

    console.log(userActived)
    return (
        <>

            {
                userActived === 'admin'
                    ? (
                        <Routes>
                            <Route path='/admin' element={< Administration />}></Route>
                            <Route path='/order' element={<Order />}></Route>
                            <Route path='/orderState' element={<OrderState />}></Route>
                            <Route path='/users' element={<Users />}></Route>
                            <Route path='/products' element={<Products />}></Route>
                        </Routes>
                    )
                    : (
                        <Routes>
                            <Route path='/admin' element={< Administration />}></Route>
                        </Routes>
                    )
            }
            {
                userActived === 'Mesero'
                    ? (
                        <Routes>
                            <Route path='/order' element={<Order />}></Route>
                            <Route path='/orderState' element={<OrderState />}></Route>
                        </Routes>

                    )
                    : (
                        <Routes>
                            <Route path='/order' element={<Order />}></Route>
                        </Routes>

                    )
            }
            {
                userActived === 'Chef'
                    ? (
                        <Routes>
                            <Route path='/orderState' element={<OrderState />}></Route>
                        </Routes>

                    )
                    : (
                        <Routes>
                            <Route path='/orderState' element={<OrderState />}></Route>
                        </Routes>

                    )
            }

        </>
    )
}

export default RoutesByRole