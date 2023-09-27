import React, { useContext, useEffect, useState } from 'react';
import person from "../../../../public/Blog/person.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaBookmark,
    FaEye,
    FaRegBookmark,
    FaShopware,
    FaStar,
    FaStarHalf,
} from "react-icons/fa";
import Rating from "react-rating";
import { useDispatch, useSelector } from 'react-redux';
import { isBookMark } from '../../../features/BookMark/BookMarkSlice';
import Aos from 'aos';
import { addToDb, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { AuthContext } from '../../provider/AuthProvider';
const SignleBookMark = ({ singleBlogPost }) => {

    const {setBookMarkUser}=useContext(AuthContext)

    
    const [cart,setCart]=useState([])   
    const handleBookMark = (singleBlogPost) => {

        if (cart.includes(singleBlogPost._id)) {
            removeFromDb(singleBlogPost._id)
        } else {
            addToDb(singleBlogPost._id)
        }
    }
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        setCart(Object.keys(storedCart))
        setBookMarkUser(storedCart)
    }, [handleBookMark])
    Aos.init()

    return (
        <div
            className="flex flex-col card shadow mx-5 lg:mx-0"


            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
        >
            <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
                <div className="flex gap-2">
                    <img src={person} alt="" />
                    <div className="flex flex-col">
                        <span>{singleBlogPost?.userName}</span>
                        <span>{singleBlogPost?.postDate}</span>
                    </div>
                </div>
                <div className="flex gap-3 " >
                    <button onClick={() => {
                        handleBookMark(singleBlogPost)
                    }}
                    >
                        {
                            cart.includes(singleBlogPost._id) ? <FaBookmark></FaBookmark> : <FaRegBookmark></FaRegBookmark>
                        }
                    </button>
                    <span>
                        <FaShopware></FaShopware>
                    </span>
                </div>
            </div>
            <div className=" px-5 py-3">
                <div>
                    <h3 className="font-bold text-2xl text-black">
                        {singleBlogPost?.postTitle}
                    </h3>
                    <img src={singleBlogPost?.PictureURL} className="my-7" alt="" />
                    <p className="font-semibold text-base text-[#706F6F] py-3">
                        {singleBlogPost?.postBody?.slice(0, 200)} ...{" "}
                        <span className="text-[#FF8C47]">Read More</span>
                    </p>
                    <hr className="my-2" />
                    <div className="flex justify-between py-3">
                        <div className="flex gap-2 items-center">
                            <Rating
                                placeholderRating={singleBlogPost?.rating}
                                emptySymbol={
                                    <FaStarHalf className="text-transparent"></FaStarHalf>
                                }
                                placeholderSymbol={
                                    <FaStar className="text-red-400"></FaStar>
                                }
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <p className="text-base font-medium text-[#706F6F]">
                                {singleBlogPost?.rating}
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <h3>Tages</h3>
                            <p>{singleBlogPost?.tags}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignleBookMark;