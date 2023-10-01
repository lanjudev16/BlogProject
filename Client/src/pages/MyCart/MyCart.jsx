import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const MyCart = () => {
    const { bitStore } = useSelector(state => state.nftBitStore)
    console.log(bitStore);
    return (
        <div className='lg:w-[1140px] mx-auto my-2'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='w-full '>
                        <tr className='w-full'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th >Person</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    {
                        bitStore?.map((singleBit,index)=><CartItem key={singleBit.id} index={index} singleBit={singleBit}></CartItem>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyCart;