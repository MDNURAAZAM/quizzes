import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../features/api/auth/authApi";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsAdmin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const formData = {
      full_name: fullName,
      email,
      password,
      role: isAdmin ? "admin" : "user",
    };

    if (password?.length >= 6) {
      if (password === confirmPassword) {
        registerUser({ formData })
          .unwrap()
          .then((data) => {
            if (data?.status === "success") {
              resetForm();
              toast.success("Congratulations, user registered succesfully");
              navigate("/login");
            }
          })
          .catch((err) => setError(err?.data?.message));
      } else {
        setError("Passwords do not match.");
      }
    } else {
      setError("Password length must be minimum 6 characters.");
    }
  };

  return (
    <div className="fixed right-0 top-0 w-full h-full lg:w-1/2 flex items-start xl:items-center justify-center p-6 lg:p-8 xl:p-12 overflow-y-auto xl:overflow-hidden">
      <div className="w-full max-w-lg ">
        <h2 className="text-3xl font-bold mb-3 flex gap-2 items-center">
          <span>Welcome to</span>
          <img src={Logo} className="h-7" />
        </h2>
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>

        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Full Name
              </label>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className="flex  gap-4">
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Enter your Password
              </label>
              <input
                required
                value={password}
                onChange={(e) => {
                  setError("");
                  setPassword(e.target.value);
                }}
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Password"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password
              </label>
              <input
                required
                value={confirmPassword}
                onChange={(e) => {
                  setError("");
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="mb-6 flex gap-2 items-center">
            <input
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              type="checkbox"
              id="admin"
              className="px-4 py-3 rounded-lg border border-gray-300"
            />
            <label htmlFor="admin" className="block ">
              Register as Admin
            </label>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg mb-2"
          >
            Create Account
          </button>
        </form>

        <div className="mt-2 text-gray-400">
          <p className="text-center">
            Already have account ?{" "}
            <Link to={"/login"} className="text-primary">
              Sign In
            </Link>
          </p>
        </div>

        {error && (
          <div className="mt-3 flex gap-2 items-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
