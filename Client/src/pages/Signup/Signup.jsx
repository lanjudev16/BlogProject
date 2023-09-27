import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  //image hosting code
  const img_hosting_token = "df6b63e6f0242336c5dec606dd1ba6b4";
  const img_hosting_url = "https://api.imgbb.com/1/upload";

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

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

  console.log(uploadedImageUrl)
  //image hosting code end

  useEffect(() => {
    document.title = "Signup | NFTERS";
  }, []);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Handle form submission here
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.firstName, uploadedImageUrl);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    // Reset the form
    reset(); // Assuming you have the `reset` function from React Hook Form
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  return (
    <div className="lg:w-[1140px] mx-auto  lg:mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-[780px] lg:mx-auto card my-[10px] mx-[40px]  shadow px-10 py-2"
      >
        {/* Email Field */}
        <h2 className="py-2 text-4xl font-bold text-[#3D00B7] text-center">
          Please Sign up
        </h2>
        <div className="mb-4 ">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500 text-xs italic">Invalid email address</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 6 })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-xs italic">
              Password must be at least 6 characters long
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.confirmPassword?.type === "required" && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
          {errors.confirmPassword?.type === "validate" && (
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword.message}
            </p>
          )}
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

        {/* First Name Field */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonefocus:shadow-outline"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#3D00B7] hover:bg-[#3D00B7] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        <p className="text-[#3D00B7] my-2 text-xl">
          Already Have an Account?{" "}
          <span>
            <Link to="/signin">Signin</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
