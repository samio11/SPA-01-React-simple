import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Document = () => {
    return (
        <section className='h-[100vh] w-full flex justify-between mt-5'>
            <div className='w-[30%] shadow-2xl'>
                <div className='p-5'>
                    <NavLink
                        to="/documents"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2 text-sm lg:text-2xl" : ""
                        }
                    >
                        Profile
                    </NavLink>
                </div>
                <div className='p-5'>
                    <NavLink
                        to="/documents/editProfile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2 text-sm lg:text-2xl" : ""
                        }
                    >
                        Edit Products
                    </NavLink>
                </div>
                <div className='p-5'>
                    <NavLink
                        to="/documents/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-black rounded-md text-white p-2 text-sm lg:text-2xl" : ""
                        }
                    >
                        Sign In
                    </NavLink>
                </div>
            </div>
            <div className='w-[70%]'>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Document;