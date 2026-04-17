import React from 'react';
import Banner from '../../componenets/banner/Banner';
import AllFriends from '../../componenets/homepage/AllFriends';

const Homepage = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl px-0">
                <Banner />
                <AllFriends />
            </div>
        </div>
    );
};

export default Homepage;
