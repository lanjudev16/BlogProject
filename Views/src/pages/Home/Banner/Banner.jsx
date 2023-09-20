import React from 'react';
import banner from '../../../../public/Banner/banner.png'
import PrimaryButton from '../../../Shared/Button/PrimaryButton';
import person1 from '../../../../public/TopCollection/Person/image1.png'
import ethereum2 from "../../../../public/TopCollection/Person/ethereum3.png"
import AOS from "aos";
import "aos/dist/aos.css";
const containerStyle = {
    background: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
};
const Banner = () => {
    AOS.init();
    return (
        <div className='lg:w-[1140px] lg:mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:mt-10 items-center'>
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
            <div style={containerStyle} className='relative h-[40vh] lg:mx-0 lg:h-[80vh] '>
                <div className='ml-[85px] mt-10'>
                    <h2 className=' text-white font-bold text-[28px]'>Abstr Gradient NFT</h2>
                    <div className='flex gap-5 items-center mt-3'>
                        <img src={person1} alt="" />
                        <h3 className='text-white font-bold text-xl'>Arkhan17</h3>
                    </div>
                </div>
                <div className='absolute bottom-5 left-20 bg-[#35BFE7] px-5 py-3 shadow-md rounded-md'>
                    <div className='flex justify-between gap-24'>
                        <div className='flex-col'>
                            <h2 className='text-white'>Current Bid</h2>
                            <button className='flex justify-between items-center  px-1 text-white text-xs rounded-md gap-1'>
                                <img className='h-[15px] w-[15px]' src={ethereum2} alt="" />
                                <h2>0.25 ETH</h2>
                            </button>
                        </div>
                        <div className='flex-col'>
                            <h2 className='text-white'>Ends in</h2>
                            <button className='flex justify-between items-center  px-1 text-white text-xs rounded-md gap-1'>
                                <h2>12h  43m  42s</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;