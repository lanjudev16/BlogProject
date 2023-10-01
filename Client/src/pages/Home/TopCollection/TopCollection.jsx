import image1 from '../../../../public/TopCollection/image1.png'
import image2 from '../../../../public/TopCollection/image2.png'
import image3 from '../../../../public/TopCollection/image3.png'
import image4 from '../../../../public/TopCollection/image4.png'
import image5 from '../../../../public/TopCollection/image5.png'
import image6 from '../../../../public/TopCollection/image6.png'
import image7 from '../../../../public/TopCollection/image7.png'
import image8 from '../../../../public/TopCollection/image8.png'
import image9 from '../../../../public/TopCollection/image9.png'
import person1 from '../../../../public/DiscoverMore/person1.png'
import person2 from "../../../../public/DiscoverMore/person2.png"
import person3 from "../../../../public/DiscoverMore/person3.png"
import person4 from "../../../../public/DiscoverMore/person4.png"
import ethereum from '../../../../public/TopCollection/Person/ethereum.png'
import ethereum2 from '../../../../public/TopCollection/Person/ethereum2.png'
import Aos from 'aos'
import TopCollectionItem from './TopCollectionItem/TopCollectionItem'
const TopCollection = () => {
    Aos.init();
    const toCollectionDat=[
        {
            id:31,
            image:image2,
            name:'The Futr Abstr',
            person: [person1, person2, person3, person4],
            ethereum:ethereum2,
            ethValue:0.25,
            number:'1 of 08',
        },
        {
            id:32,
            image:image3,
            name:'The Futr Abstr',
            person: [person1, person2, person3, person4],
            ethereum:ethereum2,
            ethValue:0.25,
            number:'1 of 08',
        },
        {
            id:33,
            image:image4,
            name:'The Futr Abstr',
            person: [person1, person2, person3, person4],
            ethereum:ethereum2,
            ethValue:0.25,
            number:'1 of 08',
        },
    ]
    return (
        <div className='mb-10'>
            <div className='lg:w-[1140px] lg:mx-auto mx-5 grid lg:grid-cols-3 gap-5'
            
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            >
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
                <div className='flex-col'>
                    {
                        toCollectionDat.map((item,index)=><TopCollectionItem item={item} key={index}></TopCollectionItem>)
                    }
                </div>
                <div className=''>
                    <div className='border-l-[1px] pl-5 border-[#ddd]'>
                        <h2 className='text-2xl uppercase font-extrabold'>Top collections over</h2>
                        <h3 className='text-[#3D00B7] font-bold text-[18px]'>
                            Last 7 days
                        </h3>
                        <>
                            <div className='flex gap-5 items-center mt-5'>
                                <span className='text-2xl font-bold'>1</span>
                                <img className='w-[50px] h-[50px]' src={image5} alt="" />
                                <div className='flex gap-5 items-center'>
                                    <div className=''>
                                        <h1 className='text-base font-medium'>CryptoFunks</h1>
                                        <div className='flex gap-5'>
                                            <img className='w-[24px] h-[24px]' src={ethereum} alt="" />
                                            <h3 className='text-[14px] font-semibold text-black' >0.25 ETH</h3>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-[#14C8B0]'>+10.52%</p>
                                </div>

                            </div>
                            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
                        </>
                        <>
                            <div className='flex gap-5 items-center mt-5'>
                                <span className='text-2xl font-bold'>2</span>
                                <img className='w-[50px] h-[50px]' src={image6} alt="" />
                                <div className='flex gap-5 items-center'>
                                    <div className=''>
                                        <h1 className='text-base font-medium'>CryptoFunks</h1>
                                        <div className='flex gap-5'>
                                            <img className='w-[24px] h-[24px]' src={ethereum} alt="" />
                                            <h3 className='text-[14px] font-semibold text-black' >0.25 ETH</h3>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-[#14C8B0]'>+10.52%</p>
                                </div>

                            </div>
                            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
                        </>
                        <>
                            <div className='flex gap-5 items-center mt-5'>
                                <span className='text-2xl font-bold'>3</span>
                                <img className='w-[50px] h-[50px]' src={image7} alt="" />
                                <div className='flex gap-5 items-center'>
                                    <div className=''>
                                        <h1 className='text-base font-medium'>CryptoFunks</h1>
                                        <div className='flex gap-5'>
                                            <img className='w-[24px] h-[24px]' src={ethereum} alt="" />
                                            <h3 className='text-[14px] font-semibold text-black' >0.25 ETH</h3>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-[#14C8B0]'>+10.52%</p>
                                </div>

                            </div>
                            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
                        </>
                        <>
                            <div className='flex gap-5 items-center mt-5'>
                                <span className='text-2xl font-bold'>4</span>
                                <img className='w-[50px] h-[50px]' src={image8} alt="" />
                                <div className='flex gap-5 items-center'>
                                    <div className=''>
                                        <h1 className='text-base font-medium'>CryptoFunks</h1>
                                        <div className='flex gap-5'>
                                            <img className='w-[24px] h-[24px]' src={ethereum} alt="" />
                                            <h3 className='text-[14px] font-semibold text-black' >0.25 ETH</h3>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-[#14C8B0]'>+10.52%</p>
                                </div>

                            </div>
                            <hr className='h-[1px] w-full bg-[#F0F0F0] mt-3' />
                        </>
                        <>
                            <div className='flex gap-5 items-center mt-5'>
                                <span className='text-2xl font-bold'>5</span>
                                <img className='w-[50px] h-[50px]' src={image9} alt="" />
                                <div className='flex gap-5 items-center'>
                                    <div className=''>
                                        <h1 className='text-base font-medium'>CryptoFunks</h1>
                                        <div className='flex gap-5'>
                                            <img className='w-[24px] h-[24px]' src={ethereum} alt="" />
                                            <h3 className='text-[14px] font-semibold text-black' >0.25 ETH</h3>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-[#14C8B0]'>+10.52%</p>
                                </div>

                            </div>
                            
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollection;