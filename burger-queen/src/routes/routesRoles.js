import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { Admin } from "../view/admin";
import { Waiter } from "../view/waiter";
import { Chef } from "../view/chef";


const RoutesRoles = () => {
    let checkRole = JSON.parse(sessionStorage.getItem('user'));
    console.log('role', checkRole.user.role)
    return (
            <Routes>
            {
             checkRole.user.role === 'admin' ? (
                 <Route path='/admin' element={<Admin />}/>
             ): null

            }
             {
             checkRole.user.role === 'waiter' ? (
                <Route path='/waiter' element={<Waiter />}/>
             ): null

            }
            {
             checkRole.user.role === 'chef' ? (
                <Route path='/chef' element={<Chef />}/>
             ): null

            }



            {     
        //     <Route path='/admin' element={<Admin />}/>
        // <Route path='/waiter' element={<Waiter />}/>
        // <Route path='/chef' element={<Chef />}/> 
            }

        <Route path='*' element={<Navigate replace to={"/"} />}></Route>
        </Routes>
        
    )
}

export {RoutesRoles}

