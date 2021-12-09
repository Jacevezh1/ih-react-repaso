// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import CRUD from './components/CRUD'
import Layout from './components/Layout'


// 2. FUNCIÓN
const Router = () => {

    // Arquitectura de routing en react
	return (
        <>

        <BrowserRouter>
            <Routes>
               <Route  path="/" element={<Layout />}>
                    {/* index es usar el path de la ruta padre */}
                    <Route index element={<Home />} />
                    <Route path="crud" element={<CRUD />} />  
               </Route>
            </Routes>
        </BrowserRouter>


        </>
    )
}


// 3. EXPORTACIÓN
export default Router

