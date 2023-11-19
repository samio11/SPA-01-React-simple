import React from 'react';

const Profile = () => {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-[50%] flex justify-center items-center bg-[radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);]'>
                <img src="../../public/samio.jpg" className='h-[200px] lg:h-[350px] w-[200] lg:w-[350px] rounded-full' alt="" />
            </div>
            <div className='w-full h-[50%] flex'>
                <div className='flex-1 flex justify-center items-center'>
                    <div>
                        <h2 className='text-sm lg:text-2xl'>Name:- Samio Hasan</h2>
                        <p className='text-sm lg:text-2xl'>Status:- Owner</p>
                        <p className='text-sm lg:text-2xl'>University:- AIUB</p>
                        <p className='text-sm lg:text-2xl'>Program:- Bsc C.S.E</p>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                     <div>
                     <a href="https://www.aiub.edu/"><img src="../../public/American_International_University-Bangladesh_Monogram.svg.png" className='w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]' alt="" /></a>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;