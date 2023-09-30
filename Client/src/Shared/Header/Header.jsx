import React, { useContext } from "react";
import logo from '../../../public/Header/NFters.png'
import {  FaRegBookmark, FaSearch, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../pages/provider/AuthProvider";
import person from '../../../public/Blog/person.png'
import { Link, useNavigate } from "react-router-dom";
import { useGetPostQuery } from "../../features/api/PostsApi";
const Header = () => {
  const {data}=useGetPostQuery()
  const bookMarkTotal=data?.filter(post=>post.bookMark=="yes").length

  const { user, loading, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSignOut = () => {
    logOut().then(result => {
      navigate("/signin")
    }).catch(error => {
    })
  }
  if (!loading) {
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
                <Link to="/myCart"><FaShoppingBag></FaShoppingBag></Link>
              </li>
                
                <li>
                  <Link to="/bookMark"><FaRegBookmark></FaRegBookmark></Link>
                </li>
                <li className="w-full">
                  <a>About</a>
                </li>
                <li className="w-full hidden lg:block relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-[1px] border-[#EFEFEF] bg-white py-2 rounded-[100%] "
                  />
                  <span className="absolute top-0 right-0 bg-transparent">
                    <FaSearch className="text-[#757575]"></FaSearch>
                  </span>
                </li>
                <span className="lg:flex lg:flex-row flex-col  gap-2">{user ? <><Link to="/AddPost"><button className="w-full px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Add Post</button></Link> <Link to="/myPost"><button className="px-5 w-full lg:my-0 my-2 py-3 rounded-md text-white outline-none bg-[#3D00B7]">My Post</button></Link> <button onClick={handleSignOut} className="w-full px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Signout</button></> : <><Link to="/signin">Sign in</Link></>}</span>
                <>{user?.photoURL ? <><img src={user?.photoURL} alt="" /></> : <><img className="hidden lg:block" src={person} alt="" /></>}</>
              </ul>
            </div>
            <Link to="/"> <img src={logo} alt="" /></Link>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center gap-3">
              <li className="relative">
                <Link to="/myCart"><FaShoppingBag></FaShoppingBag></Link>
                <span className="absolute top-[-6px] left-[-6px] text-white text-base max-w-[8px] max-h-[8px] flex items-center justify-center font-bold bg-[#fdbf01]  rounded-full">{bookMarkTotal}</span>
              </li>
              <li className="relative">
                <Link to="/bookMark"><FaRegBookmark></FaRegBookmark></Link>
                <span className="absolute top-[-6px] left-[-6px] text-white text-base max-w-[8px] max-h-[8px] flex items-center justify-center font-bold bg-[#fdbf01]  rounded-full">{bookMarkTotal}</span>
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
              <span className="flex gap-2">{user ? <><Link to="/AddPost"><button className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Add Post</button></Link> <Link to="/myPost"><button className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">My Post</button></Link> <button onClick={handleSignOut} className="px-5 py-3 rounded-md text-white outline-none bg-[#3D00B7]">Signout</button></> : <><Link to="/signin">Sign in</Link></>}</span>
              <>{user?.photoURL ? <><img className="w-[50px] h-[50px] rounded-full" src={user?.photoURL} alt="" /></> : <><img src={person} alt="" /></>}</>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="h-[100vh] flex justify-center items-center">Loading...</div>
  }

};

export default Header;
