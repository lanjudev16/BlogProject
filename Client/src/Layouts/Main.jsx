import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { useGetPostQuery } from '../features/api/PostsApi';

const Main = () => {
    const { isLoading } = useGetPostQuery()
    if (isLoading) {
        return <div className='w-full h-[100vh] flex items-center justify-center '>loading...</div>
    } else {
        return (
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    }

};

export default Main;