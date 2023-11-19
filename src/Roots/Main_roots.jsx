import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Fixed_01 from '../Components/Fixed_01';
import Home from '../Components/Home';
import Products from '../Components/Products';
import Document from '../Components/Document';

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
                path : '/documents',
                element : <Document></Document>
            },
        ]
    }
])
export default website_roots;