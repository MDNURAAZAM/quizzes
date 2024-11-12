import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/api/auth/authApi";

const LoginForm = () => {
  const [loginUser] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setIsAdmin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      role: isAdmin ? "admin" : "user",
    };
    loginUser({ formData })
      .unwrap()
      .then((data) => {
        if (data) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center">
          <span>Welcome to</span>
          <img src={Logo} className="h-7" />
        </h2>
        <h1 className="text-5xl font-bold mb-8">Sign in</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Enter your username or email address
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Password"
            />
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
          <button disabled={true} className="text-primary">
            Forgot Password
          </button>
        </div>

        <div className="mt-8">
          <p className="text-center">
            No Account ?{" "}
            <Link to={"/registration"} className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
