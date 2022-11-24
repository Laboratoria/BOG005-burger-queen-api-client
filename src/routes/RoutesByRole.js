import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Administration from './Administration'

const RoutesByRole = () => {

    const userActived = localStorage.getItem('userRole')

    return (
        <>
            <Routes>
                {
                    userActived && (
                        <Route path='/admin' element={<Administration />} />
                    )
                }
            </Routes>
        </>
    )
}

export default RoutesByRole