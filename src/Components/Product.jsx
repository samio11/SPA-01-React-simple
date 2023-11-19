import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, price, images, stock, category,description } = product;
    return (



        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-[400px]" src={images[0]} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price:- {price} $</h5>
                <div>
                    <Link to={`/products/${id}`}>
                    <button className="btn btn-outline">View Product</button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Product;