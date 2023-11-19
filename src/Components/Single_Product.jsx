import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Single_Product = () => {
    const p1 = useParams();
    const [view, setView] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${p1.id}`)
            .then(req => req.json())
            .then(data => setView(data))
    }, [p1.id])
    const { title, description, thumbnail,brand } = view;
    console.log(title, description)
    const buy = ()=>{
        Swal.fire({
            title: `${title}`,
            text: `${brand}`,
            imageUrl: `${thumbnail}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <div className='flex justify-around'>
                        <button onClick={buy} className="btn btn-success text-white">Get Started</button>
                        <Link to={'/products'}>
                            <button className="btn btn-error text-white">Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single_Product;