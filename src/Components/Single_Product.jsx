import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Single_Product = () => {
    const p1 = useParams();
    const [view, setView] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${p1.id}`)
            .then(req => req.json())
            .then(data => setView(data))
    }, [p1.id])
    const { title, description, thumbnail, brand, price, discountPercentage } = view;
    const p2 = parseFloat(price);
    const p3 = parseFloat(discountPercentage);
    const discountedPrice = parseFloat((p2 * p3) / 100);
    const totalprice = parseFloat(p2 - discountedPrice);
    console.log(p2, p3)
    const buy = () => {
        Swal.fire({
            title: `${title}`,
            text: `${brand}\n` + `Price:- ${price.toFixed(2)} $` + `Discounte:- ${discountPercentage.toFixed(2)}% ` + `Discounted Price:- ${discountedPrice.toFixed(2)} $` + `Total Price:- ${totalprice.toFixed(2)} $`,
            imageUrl: `${thumbnail}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    }
    const tryTosty = () => {
         toast("🏠Going Back to Home");
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <div className='flex justify-around'>
                        <button onClick={buy} className="btn btn-success text-white">Purchase</button>
                        <Link to={'/products'}>
                            <button onClick={tryTosty} className="btn btn-error text-white">Back Home</button>
                            <ToastContainer />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single_Product;