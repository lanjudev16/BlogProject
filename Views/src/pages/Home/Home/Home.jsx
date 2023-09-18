import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import BannerBottom from '../BannerBottom/BannerBottom';
import TopCollection from '../TopCollection/TopCollection';

const Home = () => {
    
    useEffect(() => {
        document.title = "Home | NFTERS";
      }, []);
    return (
        <div>
            <Banner ></Banner>
            <BannerBottom></BannerBottom>
            <TopCollection></TopCollection>
        </div>
    );
};

export default Home;