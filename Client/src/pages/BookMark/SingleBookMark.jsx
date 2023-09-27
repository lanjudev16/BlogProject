import React from 'react';

const SingleBookMark = ({SingleBookMark,key}) => {
    const {PictureURL,authorEmail,person,postBody,postCategory,postDate,postTitle,userName,rating}=SingleBookMark
    return (
        <div>
            <div className='flex gap-5 items-center mt-5'>
                <span className='text-2xl font-bold'>{key+1}</span>
                <img className='w-[50px] h-[50px]' src={PictureURL} alt="" />
                <div className='flex gap-5 items-center'>
                    <div className=''>
                        <h1 className='text-base font-medium'>{postTitle}</h1>
                        <div className='flex gap-5'>
                            <img className='w-[24px] h-[24px]' src={person} alt="" />
                            <h3 className='text-[14px] font-semibold text-black' >{rating}</h3>
                        </div>
                    </div>
                    <p className='text-xl font-semibold text-[#14C8B0]'>{authorEmail}</p>
                </div>

            </div>
            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
        </div>
    );
};

export default SingleBookMark;