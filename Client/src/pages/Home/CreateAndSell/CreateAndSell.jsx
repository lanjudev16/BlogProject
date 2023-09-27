import Aos from 'aos'
import image1 from '../../../../public/CreateAndSell/image1.png'
import image2 from '../../../../public/CreateAndSell/image2.png'
import image3 from '../../../../public/CreateAndSell/image3.png'
import person1 from '../../../../public/CreateAndSell/person1.png'
import person2 from '../../../../public/CreateAndSell/person2.png'
import person3 from '../../../../public/CreateAndSell/person3.png'
import PrimaryButton from '../../../Shared/Button/PrimaryButton'
const CreateAndSell = () => {
    Aos.init();
    return (
        <div className="lg:w-[1140px] lg:mx-auto mx-5 grid lg:grid-cols-2 gap-10 my-10 items-center"
        
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        >
            <div className="flex items-center gap-10">
                <div className='flex-col'>
                    <div className='relative'>
                        <img src={image1} alt="" />
                        <img className='h-[80px] w-[80px] absolute bottom-[-10%]  right-[-8%]' src={person1} alt="" />
                    </div>
                    <div className='relative mt-10 flex justify-end'>
                        <img src={image2} alt="" />
                        <img className='h-[80px] w-[80px] absolute bottom-[-10%]  right-[-8%]' src={person2} alt="" />
                    </div>
                </div>
                <div className='relative'>
                    <img src={image3} alt="" />
                    <img className='h-[80px] w-[80px] absolute bottom-[-10%]  right-[-8%]' src={person1} alt="" />
                </div>
            </div>
            <div>
                <h2 className='font-extrabold lg:text-[32px] text-2xl text-black uppercase'>Create and <br /> sell your nfts</h2>
                <p className='text-[#636363] lg:text-[18px] text-base my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                <PrimaryButton>Sign Up Now</PrimaryButton>
            </div>
        </div>
    );
};

export default CreateAndSell;