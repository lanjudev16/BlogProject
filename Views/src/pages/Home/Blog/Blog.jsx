import React, { useEffect, useState } from "react";
import person from "../../../../public/Blog/person.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEye,
  FaRegBookmark,
  FaShopware,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import Rating from "react-rating";
const Blog = () => {
  AOS.init();
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    fetch(`https://blog-project-delta-sepia.vercel.app/allPost`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPost(data);
        console.log(data);
      });
  }, []);
  
  return (
    <div className="lg:w-[1140px] mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-black uppercase mb-10 ">Recent Blog</h2>
      <div className="grid lg:grid-cols-2 items-center gap-5">
        {blogPost?.map((singleBlogPost, index) => (
          <div
            className="flex flex-col card shadow mx-5 lg:mx-0"
            // data-aos="zoom-in-up"
            // data-aos-offset="200"
            // data-aos-delay="500"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
              <div className="flex gap-2">
                <img src={person} alt="" />
                <div className="flex flex-col">
                  <span>{singleBlogPost?.userName}</span>
                  <span>{singleBlogPost?.postDate}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span>
                  <FaRegBookmark></FaRegBookmark>
                </span>
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
