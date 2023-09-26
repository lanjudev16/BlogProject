import React, { useEffect, useState } from "react";
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
import SignleBookMark from "./SignleBookMark";
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
          <SignleBookMark singleBlogPost={singleBlogPost}></SignleBookMark>
        ))}
      </div>
    </div>
  );
};

export default Blog;
