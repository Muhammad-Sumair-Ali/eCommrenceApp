import React, { useState } from 'react';
import NavBar from './NavBar';
import { register, login } from '../../action/firebase';
import { useNavigate }  from "react-router-dom"
import toast from 'react-hot-toast';

const LoginSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await register({ email, password, name });

    } catch (error) {
console.log(error)
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login({ email, password });
      // alert('User logged in successfully');
      navigate("/");

    } catch (error) {
console.log(error)
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex items-center justify-center bg-sky-100 dark:bg-gray-800">
        <div className="w-full max-w-md p-8 m-4 bg-gradient-to-r from-cyan-500/25 to-blue-700/25 backdrop-blur-md dark:bg-zinc-700  rounded-lg shadow-2xl">
          <div className="p-4">
            <h2 className="text-2xl font-semibold dark:text-white">
              {isLogin ? 'Sign in to your account' : 'Create an account'}
            </h2>
            <form onSubmit={isLogin ? handleLogin : handleSignUp}>
              {!isLogin && (
                <div className="mt-4 dark:text-white">
                  <label htmlFor="name" className="block text-sm font-medium dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="dark:text-gray-700 w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
              )}
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:text-gray-700 w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark:text-gray-700 w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-center dark:text-white">
              {isLogin ? "Don't have an account yet?" : 'Already have an account?'}
              <button onClick={toggleForm} className="text-blue-500 text-lg m-2 hover:underline">
                {isLogin ? 'Create an account' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
