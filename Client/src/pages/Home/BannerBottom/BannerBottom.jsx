import Aos from 'aos';
import { FaBandcamp, FaCalendar } from 'react-icons/fa';
const BannerBottom = () => {
    Aos.init();
    return (
        <div className="bg-[#F7F9FB] py-16 my-10"

            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
        >
            <div className="grid lg:grid-cols-3  grid-cols-1  mx-5 gap-5 lg:w-[1140px] lg:mx-auto ">
                <div>
                    <h2 className="text-2xl font-extrabold uppercase text-black">The amazing nft art of the world here</h2>
                </div>
                <div className='flex gap-5 m-0'>
                    <h2> <FaCalendar className='text-3xl'></FaCalendar>  </h2>
                    <div>
                        <h3 className='font-bold text-xl'>Fast Transaction</h3>
                        <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5 m-0'>
                    <h2> <FaBandcamp className='text-3xl'></FaBandcamp>  </h2>
                    <div>
                        <h3 className='font-bold text-xl'>Growth Transaction</h3>
                        <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;