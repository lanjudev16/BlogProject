import React from "react";
import person from "../../../../public/Blog/person.png";
import images1 from "../../../../public/Blog/images1.png";
import images2 from "../../../../public/Blog/images2.png";
import {
  FaBookmark,
  FaEye,
  FaRegBookmark,
  FaRegShareSquare,
  FaRegStar,
  FaShare,
  FaShopware,
  FaStar,
  FaStarAndCrescent,
  FaStarHalf,
} from "react-icons/fa";
import Rating from "react-rating";
const Blog = () => {
  return (
    <div className="lg:w-[1140px] mx-auto my-10">
      <div className="grid lg:grid-cols-2 items-center gap-5">
        <div className="flex flex-col card shadow mx-5 lg:mx-0">
          <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
            <div className="flex gap-2">
              <img src={person} alt="" />
              <div className="flex flex-col">
                <span>Md Lanju Mia</span>
                <span>2022-08-21</span>
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
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h3>
              <img src={images1} className="my-7" alt="" />
              <p className="font-semibold text-base text-[#706F6F] py-3">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a ... <span className="text-[#FF8C47]">Read More</span>
              </p>
              <hr className="my-2" />
              <div className="flex justify-between py-3">
                <div className="flex gap-2 items-center">
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={
                      <FaStarHalf className="text-transparent"></FaStarHalf>
                    }
                    placeholderSymbol={
                      <FaStar className="text-red-400"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                  <p className="text-base font-medium text-[#706F6F]">4.9</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaEye></FaEye>
                    <p>499</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col card shadow mx-5 lg:mx-0">
          <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
            <div className="flex gap-2">
              <img src={person} alt="" />
              <div className="flex flex-col">
                <span>Md Lanju Mia</span>
                <span>2022-08-21</span>
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
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h3>
              <img src={images2} className="my-7" alt="" />
              <p className="font-semibold text-base text-[#706F6F] py-3">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a ... <span className="text-[#FF8C47]">Read More</span>
              </p>
              <hr className="my-2" />
              <div className="flex justify-between py-3">
                <div className="flex gap-2 items-center">
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={
                      <FaStarHalf className="text-transparent"></FaStarHalf>
                    }
                    placeholderSymbol={
                      <FaStar className="text-red-400"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                  <p className="text-base font-medium text-[#706F6F]">4.9</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaEye></FaEye>
                    <p>499</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
