import React from 'react';
import {  Link } from 'react-router';


const FriendCart = ({ friend }) => {
    return (
        <div>
         <Link to={`/friendDetails/${friend.id}`} key={friend.id} className='card bg-base-100 border border-gray-200 shadow-sm '>
                        <figure><img src={friend.picture} alt="Friend" className='mt-5 w-15 h-15 object-cover rounded-full' /></figure>
                        <h2 className='text-2xl font-semibold text-center mt-2'>{friend.name}</h2>
                        <p className='text-center mt-2 text-md text-gray-400'>{friend.days_since_contact}d ago </p>
                        <h4 className='text-center mt-2 text-md font-medium text-green-900 bg-green-100 w-fit py-1 px-3 rounded-full mx-auto'>{friend.tags[0].toUpperCase()}</h4>
                        <p className=' w-fit mx-auto px-3 py-1 mt-2 mb-6 text-md text-white rounded-full'  style={{ backgroundColor: friend.status === "Overdue" ? "red" : friend.status === "On-track" ? "green" :  "orange",  }}>{friend.status}</p>
                    </Link>
                           
            
        </div>
    );
};

export default FriendCart;
