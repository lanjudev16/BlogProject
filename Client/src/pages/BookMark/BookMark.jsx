import React from 'react';
import SingleBookMark from './SingleBookMark';
import { useGetPostQuery } from '../../features/api/PostsApi';

const BookMark = () => {
    const {data:PostsData} = useGetPostQuery()
    const bookMarkPost=PostsData?.filter(post=>post.bookMark=="yes")
    return (
        <div className='lg:w-[1140px] mx-auto'>
            {
               bookMarkPost?.map((post,index)=><SingleBookMark index={index} post={post} key={index}></SingleBookMark>)  
            }
        </div>
    );
};

export default BookMark;