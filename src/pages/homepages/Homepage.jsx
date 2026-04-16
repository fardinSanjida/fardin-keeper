import React from 'react';
import Banner from '../../componenets/banner/Banner';
import Footer from '../../componenets/footer/Footer';
import AllFriends from '../../componenets/homepage/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <AllFriends />
            <Footer />
        </div>
    );
};

export default Homepage;