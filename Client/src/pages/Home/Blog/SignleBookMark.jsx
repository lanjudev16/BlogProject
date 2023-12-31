import React from 'react';
import person from "../../../../public/Blog/person.png";
import {
    FaBookmark,
    FaRegBookmark,
    FaShopware,
    FaStar,
    FaStarHalf,
} from "react-icons/fa";
import Rating from "react-rating";
import toast, { Toaster } from 'react-hot-toast';
import { useUpdatePostMutation } from '../../../features/api/PostsApi';
const SignleBookMark = ({ singleBlogPost }) => {
    const {
        userName,
        postDate,
        postTitle,
        authorEmail,
        postCategory,
        rating,
        tags,
        postBody,
        PictureURL,
        person,
    } = singleBlogPost;
    const [UpdatePost, { isLoading, data }] = useUpdatePostMutation()

    const handleBookMark = (id) => {
        if (singleBlogPost.bookMark === "yes") {

            const updateBookMarkStatus = "no"
            const data = {
                userName,
                postDate,
                postTitle,
                authorEmail,
                postCategory,
                rating,
                tags,
                postBody,
                PictureURL,
                person,
                bookMark: updateBookMarkStatus,
            }
            UpdatePost({ id, data })
            toast.error("Book Mark remove successfully")
        }
        if (singleBlogPost.bookMark === "no") {

            const updateBookMarkStatus = "yes"
            const data = {
                userName,
                postDate,
                postTitle,
                authorEmail,
                postCategory,
                rating,
                tags,
                postBody,
                PictureURL,
                person,
                bookMark: updateBookMarkStatus,
            }
            UpdatePost({ id, data })
            toast.success("Book Mark added successfully")
           
        }

    }
    return (
        <div
            className="flex flex-col card shadow mx-5 lg:mx-0"
        >
            <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
                <div className="flex gap-2">
                    <img className='w-[25px] h-[25px] rounded-full' src={person} alt="" />
                    <div className="flex flex-col">
                        <span>{singleBlogPost?.userName}</span>
                        <span>{singleBlogPost?.postDate}</span>
                    </div>
                </div>
                <div className="flex gap-3 " >
                    <button onClick={() => {
                        handleBookMark(singleBlogPost._id)
                    }}
                    >
                        {
                            (singleBlogPost.bookMark === "yes") ? <FaBookmark></FaBookmark> :
                                <FaRegBookmark></FaRegBookmark>
                        }
                        <Toaster />
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