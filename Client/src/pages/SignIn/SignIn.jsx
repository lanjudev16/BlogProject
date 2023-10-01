import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const {logIn}=useContext(AuthContext)
  const navigate=useNavigate()
  useEffect(() => {
    document.title = "Sign in | NFTERS";
  }, []);
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
    logIn(data.email,data.password).then(result=>{
      navigate("/")
    }).catch(error=>{
      console.log(error.message);
    })
    
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  return (
    <div className="flex items-center h-[100vh] justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[780px] card shadow px-10 pb-10"
      >
        {/* Email Field */}
        <h2 className="py-5 text-4xl font-bold text-[#3D00B7] text-center">
          Please Sign In
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#3D00B7] hover:bg-[#430ab4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Singin
        </button>
        <p className="text-[#3D00B7] my-2 text-xl">New Here ? <span><Link to="/signup">Create an account</Link></span></p>
      </form>
    </div>
  );
};

export default SignIn;
