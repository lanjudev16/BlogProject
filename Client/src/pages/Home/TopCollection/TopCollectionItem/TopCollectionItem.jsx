import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { storeNftBIt } from '../../../../features/nftBit/nftBitSlice';

const TopCollectionItem = ({ item }) => {
    const { image, person, ethereum2, ethValue, number, name, id } = item;
    const { cart } = useSelector(state => state.cartStore);
    const [isDisable,setDisable]=useState(false)
    const dispatch = useDispatch()
    const handlePlace = (id) => {
        dispatch(storeNftBIt({name,person,image,ethValue,id}))
        toast.success("Nft Bit store successfully")
        setDisable(true)
    }
    return (
        <div className='flex gap-5 items-center mb-5'>
            <img className='h-[147px] w-[147px]' src={image} alt="" />
            <div>
                <h1 className='text-xl font-bold'>{name}</h1>
                <div className='flex gap-2 items-center'>
                    <img className='h-[34px] w-[34px]' src={person[0]} alt="" />
                    <button className='flex justify-between items-center border-[#62c292] border-[2px] px-1 text-[#00AC4F] text-xs py-1 rounded-md'>
                        <img src={ethereum2} alt="" />
                        <h2>{ethValue} ETH</h2>
                    </button>
                    <h2 className='text-[14px]'>{number}</h2>
                </div>
                    <button disabled={isDisable}
                    onClick={() => handlePlace(item.id)} className={` ${isDisable?"text-[#a39c9c]":"bg-[#7040d1]"} hover:border-[#3D00B7] transition-all ease-in-out  border-transparent border-[2px] mt-2 px-3 py-2 rounded-md text-[14px] text-white hover:bg-[#3D00B7] bg-[#7040d1] `}>Place a bid</button>

                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default TopCollectionItem;