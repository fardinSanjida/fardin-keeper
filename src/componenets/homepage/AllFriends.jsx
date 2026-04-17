import React from 'react';
import FriendCart from '../ui/FriendCart';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useAppContext } from '../../context/AppContext';

const AllFriends = () => {
    const { friends, loadingFriends } = useAppContext();

    return (
        <section className="px-4 pb-8 pt-2 sm:px-8">
            <div className="mb-4">
                <h2 className="text-3xl font-semibold text-slate-800">Your Friends</h2>
            </div>

            {loadingFriends ? (
                <LoadingSpinner />
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {friends.map((friend) => (
                        <FriendCart key={friend.id} friend={friend} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default AllFriends;
