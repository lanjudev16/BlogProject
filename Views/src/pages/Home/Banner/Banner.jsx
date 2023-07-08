import React from 'react';
import banner from '../../../../public/Banner/banner.png'
import PrimaryButton from '../../../Shared/Button/PrimaryButton';
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
    AOS.init();
    return (
        <div className='lg:w-[1140px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:mt-10'>
            <div 
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            >
                <h2 className=' lg:text-[40px] text-[24px] px-5 lg:px-0 text-[#000000] font-bold uppercase'>Discover, and collect Digital Art NFTs</h2>
                <p className='px-5 lg:px-0 text-[#565656] lg:text-xl text-base mb-7 mt-3 pr-9'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                <span className='px-5 lg:px-0'><PrimaryButton>Explore now</PrimaryButton></span>
                <div className='flex gap-5 mt-7 px-5 lg:px-0'>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] lg:text-5xl text-2xl font-bold'>98k+</span>
                        <span className='text-[#565656] text-xl'>Artwork</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] lg:text-5xl text-2xl font-bold'>12k+</span>
                        <span className='text-[#565656] text-xl'>Auction</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#000000] lg:text-5xl text-2xl font-bold'>15k+</span>
                        <span className='text-[#565656] text-xl'>Artist</span>
                    </div>
                </div>
            </div>
            <img data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in" src={banner} alt="" />
        </div>
    );
};

export default Banner;