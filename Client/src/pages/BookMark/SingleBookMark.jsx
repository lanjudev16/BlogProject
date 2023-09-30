import React from 'react';

const SingleBookMark = ({ post,index }) => {
    const { PictureURL, authorEmail, person, postBody, postCategory, postDate, postTitle, userName, rating } = post
    return (
        <div>
            <div className='flex gap-5 items-center mt-5'>
                <span className='text-2xl font-bold'>{index+1}</span>
                <img className='w-[50px] h-[50px]' src={PictureURL} alt="" />
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-base font-medium'>Title: {postTitle}</h1>
                        <div className='flex gap-5'>
                            <img className='w-[24px] h-[24px]' src={person} alt="" />
                            <h3 className='text-[14px] font-semibold text-black' >Rating {rating}</h3>
                        </div>
                    </div>
                    <p className='text-base text-black'>{authorEmail}</p>
                </div>

            </div>
            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
        </div>
    );
};

export default SingleBookMark;