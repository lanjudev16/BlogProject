import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
const Home = () => {
    useEffect(() => {
        document.title = "Home | NFTERS";
      }, []);
    return (
        <div>
            <Banner></Banner>
            <Blog></Blog>
        </div>
    );
};

export default Home;