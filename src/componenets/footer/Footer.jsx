import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-green-900'>
             <h1 className='text-4xl text-white font-bold text-center pt-20  '>KeenKeeper</h1>
             <p className='text-center text-white mt-2 pb-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
             <h4 className='text-center text-white mt-4'>Social Links</h4>
             <div className='flex justify-center gap-3 mt-2 pb-10'>
             <IoLogoYoutube className='text-white' />
             <FaFacebook className='text-white' />
             <FaXTwitter className='text-white' />
             </div>
             <hr className=' w-[70%] border-t border-green-800 pb-5 mx-auto ' ></hr>
             <div className=' w-[70%] flex justify-between gap-2 mx-auto pb-6'>
                <p className='text-center text-gray-400 mt-4'>© 2024 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-center gap-4 mt-2'>
                    <p className='text-center text-gray-400 mt-2'>Privacy Policy</p>
                     <p className='text-center text-gray-400 mt-2'>Terms of Service</p>
                      <p className='text-center text-gray-400 mt-2'>Cookies</p>
                </div>

             </div>


        </div>
    );
};

export default Footer;