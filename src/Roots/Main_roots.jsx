import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Fixed_01 from '../Components/Fixed_01';
import Home from '../Components/Home';
import Products from '../Components/Products';
import Document from '../Components/Document';
import Single_Product from '../Components/Single_Product';

const website_roots = createBrowserRouter([
    {
        path: '/',
        element : <Fixed_01></Fixed_01>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/products',
                element : <Products></Products>,
                loader : ()=> fetch(`https://dummyjson.com/products`) 
            },
            {
                path : '/products/:id',
                element : <Single_Product></Single_Product>,
                loader : (para)=> fetch(`https://dummyjson.com/products/${para}/params/id`)
            },
            {
                path : '/documents',
                element : <Document></Document>
            },
        ]
    }
])
export default website_roots;