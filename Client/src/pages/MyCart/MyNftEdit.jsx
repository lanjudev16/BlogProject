import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateNftBit } from '../../features/nftBit/nftBitSlice';
import toast, { Toaster } from 'react-hot-toast';

const MyNftEdit = () => {
    const dispatch = useDispatch()
    const { bitStore } = useSelector(state => state.nftBitStore)
    const params = useParams()
    const id = params.id
    const bit = bitStore?.find(item => (item.id) == id)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const ethValue = e.target.ethValue.value
        dispatch(updateNftBit({ name: name, ethValue: ethValue, id: id }))
        toast.success("Nft Updated")
        navigate('/myCart')
    }
    return (
        <div >
            <section className="text-[#FEF9FA] body-font relative text-base">
                <div className="container px-5 py-10  mx-auto border-2xl ">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <form onSubmit={handleSubmit} className=" border-[1px] border-[#a15999] px-10 py-10 rounded-md">
                            <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4  text-[#a15999]">
                                Update Nft
                            </h1>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="Phone"
                                            required
                                            defaultValue={bit?.name}
                                            name="name"
                                            className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue={bit?.ethValue}
                                            id="Purpose of visit"
                                            name="ethValue"
                                            className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className=" w-full text-center text-[#fff] bg-[#a15999] border-0 py-2 px-8 focus:outline-none hover:bg-[#a8599f] rounded text-lg">
                                        Update
                                    </button>
                                </div>
                            </div>

                        </form>
                        <Toaster></Toaster>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyNftEdit;