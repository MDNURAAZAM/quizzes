import React from "react";
import Logo from "../../assets/logo.svg";

const LoginForm = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center">
          <span>Welcome to</span>
          <img src={Logo} className="h-7" />
        </h2>
        <h1 className="text-5xl font-bold mb-8">Sign in</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Enter your username or email address
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Username or email address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Enter your Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Password"
            />
          </div>
          <div className="mb-6 flex gap-2 items-center">
            <input
              type="checkbox"
              id="admin"
              className="px-4 py-3 rounded-lg border border-gray-300"
            />
            <label htmlFor="admin" className="block ">
              Login as Admin
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg mb-4"
          >
            Sign in
          </button>
        </form>

        <div className="text-center">
          <a href="#" className="text-primary">
            Forgot Password
          </a>
        </div>

        <div className="mt-8">
          <p className="text-center">
            No Account ?{" "}
            <a href="#" className="text-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
