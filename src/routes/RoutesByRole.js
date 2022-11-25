import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Administration from './Administration'
import Order from './Order'
import OrderState from './OrderState'
import OrderStateChef from './OrderStateChef'
import { Products } from './Products'
import { Users } from './Users'

const RoutesByRole = () => {

    const userActived = localStorage.getItem('userRole')

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
                    : null
            }
            {
                userActived === 'Mesero'
                    ? (
                        <Routes>
                            <Route path='/order' element={<Order />}></Route>
                            <Route path='/orderState' element={<OrderState />}></Route>
                        </Routes>

                    )
                    : null
            }
            {
                userActived === 'Chef'
                    ? (
                        <Routes>
                            <Route path='/orderStateChef' element={<OrderStateChef />}></Route>
                        </Routes>

                    )
                    : null
            }

        </>
    )
}

export default RoutesByRole