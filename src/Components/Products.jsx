import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const productData = useLoaderData();
    const {products} = productData
    console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
           {
            products?.map(x=><Product key={x.id} product={x}></Product>)
           }
        </div>
    );
};

export default Products;