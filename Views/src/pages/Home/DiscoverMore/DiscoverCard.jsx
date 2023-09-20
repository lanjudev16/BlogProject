const DiscoverCard = ({cardData}) => {
    const {image,person,name,ethereum,ethValue}=cardData
    return (
        <div className="bg-white shadow-md rounded-md p-3 lg:mx-0 mx-5">
            <div className='relative'>
                <img className="w-full object-cover" src={image} alt="" />
                <div className='flex absolute bottom-[-7%] left-3 items-center '>
                    {
                        person.map((item,index)=><img key={index} className='' src={item} alt="" />)
                    }
                   
                </div>
            </div>
            <h2 className='font-bold text-xl mt-5 mb-3'>{name}</h2>
            <div className='flex items-center justify-between'>
                <div className='flex justify-between items-center  px-1 text-[#00AC4F] text-xs  rounded-md gap-2'>
                    <img src={ethereum} alt="" />
                    <h2>{ethValue} ETH</h2>
                </div>
                <div>
                    <h2 className='font-medium text-[14px] text-[#838383]'>1 of 321</h2>
                </div>
            </div>
            <hr className='my-2'/>
            <div className='flex items-center justify-between'>
                <button className='bg-[#F5F5F5] rounded-full font-semibold text-[#5539A8] px-3
                 py-1 text-[12px]'>3h 50m 2s left</button>
                 <h2 className='font-bold text-base text-[#4F33A3]'>Place a bid</h2>
            </div>
        </div>
    );
};

export default DiscoverCard;