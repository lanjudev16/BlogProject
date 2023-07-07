import React from "react";
import logo from "../../../public/Footer/NFters.png";
import { FaFacebook, FaLinkedin, FaSearch, FaTwitter } from "react-icons/fa";
import PrimaryButton from "../Button/PrimaryButton";
const Footer = () => {
  return (
    <div className="">
      <hr />
      <div className="lg:w-[1140px] mx-auto">
        <footer className="grid lg:grid-cols-6 grid-cols-1 py-10 gap-5 px-5 lg:px-0">
          <div className="col-span-2">
            <img src={logo} className="mb-7" alt="" />
            <p className="text-[14px] text-[#363639]">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="flex gap-2 mt-7">
              <span><FaFacebook className="text-[#3B5998] text-3xl"></FaFacebook></span>
              <span><FaTwitter className="text-[#55ACEE] text-3xl"></FaTwitter></span>
              <span><FaLinkedin className="text-[#007AB9] text-3xl"></FaLinkedin></span>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-black text-xl mb-7">Market Place</h2>
            <a className="text-[14px] text-[#363639] link link-hover">All</a>
            <a className="text-[14px] text-[#363639] link link-hover">NFTs</a>
            <a className="text-[14px] text-[#363639] link link-hover">Art</a>
            <a className="text-[14px] text-[#363639] link link-hover">New</a>
            <a className="text-[14px] text-[#363639] link link-hover">Utility</a>
            <a className="text-[14px] text-[#363639] link link-hover">Music</a>
            <a className="text-[14px] text-[#363639] link link-hover">Domain</a>
            <a className="text-[14px] text-[#363639] link link-hover">Name</a>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-black text-xl mb-7">My Account</h2>
            <a className="text-[14px] text-[#363639] link link-hover">Profile</a>
            <a className="text-[14px] text-[#363639] link link-hover">Favorite</a>
            <a className="text-[14px] text-[#363639] link link-hover">My Collections</a>
            <a className="text-[14px] text-[#363639] link link-hover">Settings</a>
          </div>
          <div className="flex flex-col col-span-2">
            <h2 className="font-bold text-black text-xl">Stay in the loop</h2>
            <p className="text-[14px] text-[#363639] mt-7">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="relative my-7">
              <input
                type="text"
                placeholder="Search"
                className="w-full border-[2px] border-[#EFEFEF] bg-white py-2 rounded-[20px] outline-none px-5 "
              />
              <span className="text-[12px] absolute  right-0 translate-y-[-50%] top-1/2"><button className="px-5 py-2 rounded-[60px] text-white outline-none bg-[#3D00B7]">Subscribe now</button></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
