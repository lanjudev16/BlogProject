import React, { useContext } from "react";
import logo from '../../../public/Header/NFters.png'
import { FaBeer, FaSearch } from 'react-icons/fa';
import { AuthContext } from "../../pages/provider/AuthProvider";
import person from '../../../public/Blog/person.png'
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleSignOut=()=>{
    logOut().then(result=>{
      navigate("/signin")
    }).catch(error=>{
      console.log(error)
    })
  }
  console.log(user)
  if(user){
    return (
      <div className="bg-base shadow py-3">
        <div className="navbar lg:w-[1140px] mx-auto flex justify-between">
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
               <li>
                <a>Marketplace</a>
              </li>
              <li>
                <a>Resource</a>
              </li>
              <li>
                <a>About</a>
              </li>
                
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="border-[1px] border-[#EFEFEF] bg-white py-2 rounded-[100%] "
                />
              </li>
              <button className="px-10 py-3 rounded-full text-white outline-none bg-[#3D00B7]">Upload</button>
              <button className="px-10 py-3 rounded-full border-[1px] border-[#3D00B7] text-[#3D00B7] outline-none bg-white">Connect wallet</button>
              </ul>
            </div>
            <a className=" text-[#3D00B7] text-2xl"><img src={logo} alt="" /></a>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center gap-3">
              <li>
                <a>Marketplace</a>
              </li>
              <li>
                <a>Resource</a>
              </li>
              <li>
                <a>About</a>
              </li>
              
              <li className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-[1px] border-[#EFEFEF] bg-white py-2 rounded-[100%] "
                />
                <span className="absolute top-0 right-0 bg-transparent">
                <FaSearch className="text-[#757575]"></FaSearch>
                </span>
              </li>
              <span className="flex gap-2">{user && <><Link to="/AddPost"><button className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Add Post</button></Link> <button className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">My Post</button> <button onClick={handleSignOut} className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Signout</button></> }</span>
              <>{user?.photoURL ? <><img src={user?.photoURL} alt="" /></>:<><img src={person} alt="" /></>}</>
            </ul>
          </div>
        </div>
      </div>
    );
  }else{
    return <div className="h-[100vh] flex justify-center items-center">Loading...</div>
  }

};

export default Header;
