import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import SingleBookMark from './SingleBookMark';

const BookMark = () => {
    const { blogPostContext, bookMarkUser } = useContext(AuthContext)
    const matchingValues = [];
    for (const element of blogPostContext) {
        if (Object.keys(bookMarkUser).includes(element._id)) {
            matchingValues.push(element);
        }
    }
    console.log(matchingValues);
    return (
        <div className='lg:w-[1140px] mx-auto'>
            {
                matchingValues?.map((SingleBookMark, index) =>
                 <SingleBookMark key={index} SingleBookMark={SingleBookMark}></SingleBookMark>)
            }
        </div>
    );
};

export default BookMark;