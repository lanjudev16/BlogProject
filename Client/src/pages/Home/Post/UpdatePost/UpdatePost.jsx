import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const UpdatePost = () => {

    useEffect(() => {
        document.title = "Update Post | NFTERS";
      }, []);

  const params = useParams();
  const id = params.id;
  const [getSinglePost, setSinglePost] = useState({});
  //id wise data load from server
  useEffect(() => {
    fetch(`https://blog-project-delta-sepia.vercel.app/getSinglePost/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      });
  }, []);
  console.log(getSinglePost);
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
  } = getSinglePost;
  useEffect(() => {
    document.title = "Add a Post | Nsft";
  }, []);
  const img_hosting_token = "df6b63e6f0242336c5dec606dd1ba6b4";
  const img_hosting_url = "https://api.imgbb.com/1/upload";
  const { user } = useContext(AuthContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const [category, setCategory] = useState(postCategory);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(PictureURL);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  console.log(user);
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
    const person = user?.photoURL
      ? user?.photoURL
      : "https://i.ibb.co/V2xbfKH/images2.png";

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
      const postInfo = {
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
      };
      console.log(postInfo);
      fetch(`https://blog-project-delta-sepia.vercel.app/updatePost/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(postInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.modifiedCount>0){
            alert('update post')
            navigate('/myPost')
          }
        });
    }
    console.log(selectedImage);
  };
  return (
    <div className="card lg:w-[1140px] mx-auto bg-[#FFFFFF] rounded-[20px]  border-[2px]  p-5 my-5   border-[#3D00B7]">
      <h2 className="text-3xl font-bold text-black text-center mb-5">
        Update Post
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
                defaultValue={userName}
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
                defaultValue={postDate}
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
                {PictureURL && (
                  <img className="w-[300px] h-[100px]" src={PictureURL} alt="Default Image" />
                )}
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
                defaultValue={postTitle}
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
                defaultValue={authorEmail}
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
                defaultValue={rating}
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
                defaultValue={tags}
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
          defaultValue={postBody}
          className="textarea input-bordered  h-24 w-full"
        ></textarea>
        <div className="text-center">
          <input
            type="submit"
            value="Update Post"
            className="lg:px-10 lg:py-3 px-5 py-2 rounded-md text-white outline-none bg-[#3D00B7] cursor-pointer w-[25%]  my-4"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
