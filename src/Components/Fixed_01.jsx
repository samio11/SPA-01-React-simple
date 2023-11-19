import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Footer from './Footer';

const Fixed_01 = () => {
    return (
        <section>
            {/* Front part */}
            <div className='flex justify-between items-center shadow-xl h-[15vh]'>
                <div>
                    <h3 className='text-3xl ml-4'>SH-SHOP</h3>
                </div>
                <div className='flex justify-around items-center mr-3 gap-4'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2" : ""
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/documents"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2" : ""
                        }
                    >
                        Dashbord
                    </NavLink>
                </div>
            </div>
            {/* Mid Part */}
            <div className='h-auto'>
                <Outlet></Outlet>
            </div>
            {/* Last Part */}
            <Footer></Footer>
        </section>
    );
};

export default Fixed_01;