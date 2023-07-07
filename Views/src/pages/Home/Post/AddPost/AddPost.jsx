import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const AddPost = () => {

  useEffect(() => {
    document.title = "Add Post | NFTERS";
  }, []);
  const img_hosting_token = "df6b63e6f0242336c5dec606dd1ba6b4";
  const img_hosting_url = "https://api.imgbb.com/1/upload";
  const { user } = useContext(AuthContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const [category, setCategory] = useState("Art & Culture");
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  console.log(user)
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    const form = event.target;
    const PictureURL = uploadedImageUrl;
    const userName = form.userName.value;
    const postDate = form.postDate.value;
    const postTitle = form.postTitle.value;
    const authorEmail = form.authorEmail.value;
    const postCategory = category;
    const rating = form.rating.value;
    const tags = form.tags.value;
    const postBody = form.postBody.value;
    const person=(user?.photoURL)?user?.photoURL:'https://i.ibb.co/V2xbfKH/images2.png'

    if (selectedImage) {
      try {
        const formData = new FormData();
        formData.append("image", selectedImage);

        fetch(`https://api.imgbb.com/1/upload?key=${img_hosting_token}`, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              setUploadedImageUrl(data.data.url);
              console.log(data.data.url);
            } else {
              console.error("Image upload failed");
            }
          });
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadedImageUrl) {
     const  postInfo = {
        userName,
        postDate,
        postTitle,
        authorEmail,
        postCategory,
        rating,
        tags,
        postBody,
        PictureURL,
        person
      };
      console.log(postInfo);
      fetch('https://blog-project-delta-sepia.vercel.app/addPost',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postInfo)
      }).then(res=>res.json()).then(data=>{
        if(data.insertedId){
          console.log(data)
          alert('Inserted successfully')
        }
      })
    }
    console.log(selectedImage)
  };

  return (
    <div>
      <div className="card lg:w-[1140px] mx-auto bg-[#FFFFFF] rounded-[20px]  border-[2px]  p-5 my-5   border-[#3D00B7]">
      <h2 className="text-3xl font-bold text-black text-center mb-5">
        Add Post
      </h2>
        <form onSubmit={handleAddPost}>
          <div className="grid grid-cols-2 gap-5 flex-shi">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Author Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.displayName 
                  }
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  name="userName"
                />
              </label>
            </div>
            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Post Date
                </span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  name="postDate"
                  id=""
                  cols="30"
                  rows="10"
                  defaultValue={`${formattedDate}`}
                ></input>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Picture URL
                </span>
              </label>
              <label className="input-group">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Post title
                </span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  name="postTitle"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Post title"
                ></input>
              </label>
            </div>
            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Author email
                </span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  name="authorEmail"
                  defaultValue={user?.email}
                  placeholder="Author Email"
                ></input>
              </label>
            </div>
            <div className="form-control shrink">
              <div className="">
                <label className="label">
                  <span className="label-text font-medium text-base text-[#232323]">
                    Category
                  </span>
                </label>
                <select onClick={handleSelect}>
                  <option value="Sports">Sports</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Art & Culture" selected>
                    Art & Culture
                  </option>
                </select>
              </div>
            </div>
            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  name="rating"
                  placeholder="Rating"
                ></input>
              </label>
            </div>

            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Tags
                </span>
              </label>
              <label className="input-group">
                {" "}
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="tags"
                  placeholder="Tags"
                ></input>
              </label>
            </div>
            <div className="form-control shrink">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Post Body
                </span>
              </label>
              <label className="input-group"></label>
            </div>
          </div>

          <textarea
            name="postBody"
            id=""
            cols="30"
            rows="10"
            className="textarea input-bordered  h-24 w-full"
          ></textarea>
          <div className="text-center">
            <input
              type="submit"
              value="Add Post"
              className="lg:px-10 lg:py-3 px-5 py-2 rounded-md text-white outline-none bg-[#3D00B7] cursor-pointer w-[25%]  my-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
