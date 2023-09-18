import image1 from '../../../../public/TopCollection/image1.png'
import image2 from '../../../../public/TopCollection/image2.png'
import image3 from '../../../../public/TopCollection/image3.png'
import image4 from '../../../../public/TopCollection/image4.png'
import image5 from '../../../../public/TopCollection/image5.png'
import image6 from '../../../../public/TopCollection/image6.png'
import image7 from '../../../../public/TopCollection/image7.png'
import person1 from '../../../../public/TopCollection/Person/image1.png'
import ethereum from '../../../../public/TopCollection/Person/ethereum.png'
import ethereum2 from '../../../../public/TopCollection/Person/ethereum2.png'
const TopCollection = () => {
    return (
        <div className='mb-10'>
            <div className='lg:w-[1140px] mx-auto grid lg:grid-cols-3 gap-5'>
                <div>
                    <img src={image1} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex gap-2 mt-3 col-span-2'>
                            <img src={person1} alt="" />
                            <div>
                                <h2 className='text-xl font-bold text-black'>The Futr Abstr</h2>
                                <h3 className='text-[14px]'>10 in the stock</h3>
                            </div>
                        </div>
                        <div className='flex-col gap-2 mt-3'>
                            <h2 className='text-[14px]'>The Futr Abstr</h2>
                            <div className='flex gap-2'>
                                <img src={ethereum} alt="" />
                                <h3 className='text-xl font-bold text-black' >0.25 ETH</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-5 items-center'>
                        <img className='h-[147px] w-[147px]' src={image2} alt="" />
                        <div>
                            <h1 className='text-xl font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2 items-center'>
                                <img className='h-[34px] w-[34px]' src={person1} alt="" />
                                <button className='flex justify-between items-center border-[#62c292] border-[2px] px-1 text-[#00AC4F] text-xs py-1 rounded-md'>
                                    <img src={ethereum2} alt="" />
                                    <h2>0.25 ETH</h2>
                                </button>
                                <h2 className='text-[14px]'>1 of 08</h2>
                            </div>
                            <button className='border-[#3D00B7] border-[2px] mt-2 px-3 py-2 rounded-md text-[14px] text-white bg-[#3D00B7]'>Place a bid</button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center my-3'>
                        <img className='h-[147px] w-[147px]' src={image3} alt="" />
                        <div>
                            <h1 className='text-xl font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2 items-center'>
                                <img className='h-[34px] w-[34px]' src={person1} alt="" />
                                <button className='flex justify-between items-center border-[#62c292] border-[2px] px-1 text-[#00AC4F] text-xs py-1 rounded-md'>
                                    <img src={ethereum2} alt="" />
                                    <h2>0.25 ETH</h2>
                                </button>
                                <h2 className='text-[14px]'>1 of 08</h2>
                            </div>
                            <button className='border-[#3D00B7] border-[2px] mt-2 px-3 py-2 rounded-md text-[14px] text-[#3D00B7] '>Place a bid</button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img className='h-[147px] w-[147px]' src={image4} alt="" />
                        <div>
                            <h1 className='text-xl font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2 items-center'>
                                <img className='h-[34px] w-[34px]' src={person1} alt="" />
                                <button className='flex justify-between items-center border-[#62c292] border-[2px] px-1 text-[#00AC4F] text-xs py-1 rounded-md'>
                                    <img src={ethereum2} alt="" />
                                    <h2>0.25 ETH</h2>
                                </button>
                                <h2 className='text-[14px]'>1 of 08</h2>
                            </div>
                            <button className='border-[#3D00B7] border-[2px] mt-2 px-3 py-2 rounded-md text-[14px] text-[#3D00B7] '>Place a bid</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <h2 className='text-2xl uppercase font-extrabold'>Top collections over</h2>
                        <h3 className='text-[#3D00B7] font-bold text-[18px]'>
                            Last 7 days
                        </h3>
                        <div>
                            <span>1</span>
                            <img src={image5} alt="" />
                            <div>
                                <h1>CryptoFunks</h1>
                                <div className='flex gap-2'>
                                    <img src={ethereum} alt="" />
                                    <h3 className='text-xl font-bold text-black' >0.25 ETH</h3>
                                </div>
                                <p>+10.52%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollection;