import React, { use } from 'react';
import FriendCart from '../ui/FriendCart';


const friendPromise = fetch('/friendsData.json').then(res => res.json());

const AllFriends = () => {
    const friends =use(friendPromise);
    console.log(friends,"friends");
    return (
        <div className='my-12'>
            <h1 className='text-3xl font-bold text-center mb-6'>All Friends</h1>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 mt-20'>
                {friends.map((friend) => (
                   <FriendCart key={friend.id} friend={friend} />     
                ))}
            </div>
            
            
            
        </div>
    );
};

export default AllFriends;