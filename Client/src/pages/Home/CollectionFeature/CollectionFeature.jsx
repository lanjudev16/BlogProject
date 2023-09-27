import image1 from '../../../../public/CollectionFeatures/image1.png'
import image2 from '../../../../public/CollectionFeatures/image2.png'
import image3 from '../../../../public/CollectionFeatures/image3.png'
import image4 from '../../../../public/CollectionFeatures/image4.png'
import image5 from '../../../../public/CollectionFeatures/image5.png'
import image6 from '../../../../public/CollectionFeatures/image6.png'
import image7 from '../../../../public/CollectionFeatures/image7.png'
import image8 from '../../../../public/CollectionFeatures/image8.png'
import image9 from '../../../../public/CollectionFeatures/image9.png'
import image10 from '../../../../public/CollectionFeatures/image10.png'
import image11 from '../../../../public/CollectionFeatures/image11.png'
import image12 from '../../../../public/CollectionFeatures/image12.png'
import person1 from '../../../../public/CollectionFeatures/person1.png'
import Aos from 'aos'
const CollectionFeature = () => {
    Aos.init();
    return (
        <div className="bg-[#F7F8FA]"
        
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        >
            <div className="lg:w-[1140px] lg:mx-auto mx-5 py-10">
                <h2 className="text-black font-extrabold text-2xl lg:text-3xl uppercase">Collection features nfts</h2>
                <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 mt-5">
                    <div>
                        <div className="flex justify-between gap-2 ">
                            <div className="col-span-2">
                                <img src={image1} alt="" />
                            </div>
                            <div>
                                <img src={image2} alt="" />
                                <img className='my-[10px]' src={image3} alt="" />
                                <img src={image4} alt="" />
                            </div>

                        </div>
                        <div className='flex justify-between items-end mt-3'>
                            <div>
                                <h2 className='text-xl font-bold'>Amazing Collection</h2>
                                <div className='flex items-end gap-2 mt-2'>
                                    <img src={person1} alt="" />
                                    <h2>by Arkhan</h2>
                                </div>
                            </div>
                            <button className='border-[1px] text-[#2639ED] text-[11px] border-[#2639ED] px-3 py-2 font-bold rounded-lg '>Total 54 Items</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-2 ">
                            <div className="col-span-2">
                                <img src={image5} alt="" />
                            </div>
                            <div>
                                <img src={image6} alt="" />
                                <img className='my-[10px]' src={image7} alt="" />
                                <img src={image8} alt="" />
                            </div>

                        </div>
                        <div className='flex justify-between items-end mt-3'>
                            <div>
                                <h2 className='text-xl font-bold'>Amazing Collection</h2>
                                <div className='flex items-end gap-2 mt-2'>
                                    <img src={person1} alt="" />
                                    <h2>by Arkhan</h2>
                                </div>
                            </div>
                            <button className='border-[1px] text-[#2639ED] text-[11px] border-[#2639ED] px-3 py-2 font-bold rounded-lg '>Total 54 Items</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-2 ">
                            <div className="col-span-2">
                                <img src={image9} alt="" />
                            </div>
                            <div>
                                <img src={image10} alt="" />
                                <img className='my-[10px]' src={image11} alt="" />
                                <img src={image12} alt="" />
                            </div>

                        </div>
                        <div className='flex justify-between items-end mt-3'>
                            <div>
                                <h2 className='text-xl font-bold'>Amazing Collection</h2>
                                <div className='flex items-end gap-2 mt-2'>
                                    <img src={person1} alt="" />
                                    <h2>by Arkhan</h2>
                                </div>
                            </div>
                            <button className='border-[1px] text-[#2639ED] text-[11px] border-[#2639ED] px-3 py-2 font-bold rounded-lg '>Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionFeature;