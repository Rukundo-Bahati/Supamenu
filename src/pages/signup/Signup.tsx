import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-amber-500 grid grid-cols-1 md:grid-cols-2 items-center p-4 min-h-screen">
      <div className="text-center md:text-left md:col-span-1">
        <h1 className="text-3xl md:text-5xl">
          <span className="text-black">Supa</span>
          <span className="text-white">Menu</span>
        </h1>
      </div>
      <div className="shadow-md shadow-gray-100 bg-white m-4 rounded-md md:p-8 md:w-96">
        <div className="flex flex-col text-center md:text-left items-center">
          <h1 className="text-center md:text-left text-3xl text-slate-800 font-semibold">
            Sign up
          </h1>
        </div>
        <form className="max-w-sm mx-auto md:max-w-none"> 
          <div className="mb-3">
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-slate-500"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="fname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-slate-500"
            >
              LAST NAME
            </label>
            <input
              type="text"
              id="lname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your last name"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-slate-500"
            >
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-500"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="my-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-slate-500"
              >
                PASSWORD
              </label>
              <a
                href="#"
                className="block mb-2 text-sm font-medium text-slate-500"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-ambere-600 dark:hover:bg-amber-600 dark:focus:ring-amber-700 hover:border hover:border-blue-500 w-full duration-500"
          >
            Sign Up
          </button>

          <div className="flex items-start mt-3">
            <label
              htmlFor="terms"
              className="text-sm font-medium dark:text-gray-600"
            >
              Already have an account?
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-700 font-semibold"
              >
                Login
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;