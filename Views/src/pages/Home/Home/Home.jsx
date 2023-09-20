import React, { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import BannerBottom from '../BannerBottom/BannerBottom';
import TopCollection from '../TopCollection/TopCollection';
import CollectionFeature from '../CollectionFeature/CollectionFeature';
import CreateAndSell from '../CreateAndSell/CreateAndSell';
import DiscoverMore from '../DiscoverMore/DiscoverMore';

const Home = () => {
    
    useEffect(() => {
        document.title = "Home | NFTERS";
      }, []);
    return (
        <div>
            <Banner ></Banner>
            <BannerBottom></BannerBottom>
            <TopCollection></TopCollection>
            <CollectionFeature></CollectionFeature>
            <CreateAndSell></CreateAndSell>
            <DiscoverMore></DiscoverMore>
        </div>
    );
};

export default Home;