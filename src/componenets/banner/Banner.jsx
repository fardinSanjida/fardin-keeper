import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <div>
                <h1 className='text-4xl font-bold text-center mt-10'>Friends to keep close in your life</h1>
                <p className='text-center mt-4 text-md text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the</p>
                <p className='text-center text-md text-gray-600'>relationships that matter most.</p>
                <div className='flex justify-center mt-6 mb-6'>
                    <button className='btn bg-green-800 text-white border-0 shadow-lg hover:shadow-green-800/30 transition-all'>
                        <FaPlus className='mr-2' />
                        Add Friend
                    </button>
                </div>
            </div>
            <div className=' w-[80%] grid grid-cols-4 mx-auto gap-6 mt-10'>
            <div className='border-1 bg-white border-gray-100 shadow-xl p-4 rounded-lg m-4'>
                <h2 className='text-2xl font-semibold text-center mt-2'>10</h2>
                <p className='text-center mt-3 text-md text-gray-400'>Total Friends</p>
            </div>
            <div className='border-1 bg-white border-gray-100 shadow-xl p-4 rounded-lg m-4'>
                 <h2 className='text-2xl font-semibold text-center mt-2'>3</h2>
                <p className='text-center mt-3 text-md text-gray-400'>On Track</p>
            </div>
            <div className='border-1 bg-white border-gray-100 shadow-xl p-4 rounded-lg m-4'>
                 <h2 className='text-2xl font-semibold text-center mt-2'>6</h2>
                <p className='text-center mt-3 text-md text-gray-400'>Need Attention</p>
            </div>
            <div className='border-1 bg-white border-gray-100 shadow-xl p-4 rounded-lg m-4'>
                 <h2 className='text-2xl font-semibold text-center mt-2'>12</h2>
                <p className='text-center mt-3 text-md text-gray-400'>Interactions This Month</p>
            </div>

            </div>
            <hr className='my-10 w-[90%] border-gray-200 mx-auto rounded-3xl' />
        </div>
    );
};

export default Banner;
