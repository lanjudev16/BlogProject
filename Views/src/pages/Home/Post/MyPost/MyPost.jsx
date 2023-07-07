import React, { useEffect, useState } from "react";
import { FaBookmark, FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyPost = () => {

  useEffect(() => {
    document.title = "My Post | NFTERS";
  }, []);

  const [post, setPost] = useState([]);
  // delete method
  const handleDelete = (id) => {
    fetch(`https://blog-project-delta-sepia.vercel.app/postDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Delete Successfully");
        }
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("https://blog-project-delta-sepia.vercel.app/myPost")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [handleDelete]);
  return (
    <div className="lg:w-[1140px] mx-auto my-5">
      <div className="overflow-x-auto">
        <table className="table lg:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Author Info</th>
              <th>Post Title</th>
              <th>Post Image</th>
              <th>Post Body</th>
              <th>Post Category</th>
              <th>Rating</th>
              <th className="text-center">Update</th>
              <th></th>
              {/* <th className="flex gap-5 justify-between"><span className="bg-red-400 px-3 py-3 rounded-md text-white">Delete</span><span className="bg-red-400 px-3 py-3 rounded-md text-white">Update</span></th> */}
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-red-300]">
            {post.map((singlePost, index) => (
              <tr key={singlePost._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singlePost?.person} alt="Author" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{singlePost?.userName}</div>
                      <div className="text-sm opacity-50">
                        {singlePost?.postDate}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">{singlePost?.postTitle.slice(0, 10)}...</td>
                <td>
                  <img
                    className="w-[100px] h-[100px] object-cover rounded-full"
                    src={singlePost?.PictureURL}
                    alt=""
                  />
                </td>
                <td>{singlePost?.postBody.slice(0, 15)}...</td>

                <td>{singlePost?.postCategory}</td>
                <td>{singlePost?.rating}</td>
                <td className="flex justify-center items-center h-[132.5px]">
                  <span className="bg-red-400  px-2 py-2 rounded-md ">
                    <Link to={`/updatePost/${singlePost?._id}`}>
                      <FaEdit className="cursor-pointer text-2xl text-white"></FaEdit>
                    </Link>
                  </span>
                </td>
                <td></td>
                <td
                  onClick={() => handleDelete(singlePost?._id)}
                  className=" flex justify-center items-center h-[132.5px]"
                >
                  <span className="bg-red-400  px-2 py-2 rounded-md ">
                    <FaTrash className="cursor-pointer text-2xl text-white"></FaTrash>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
