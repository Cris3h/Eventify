"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import eventifyBlackLogo from '../images/brand/eventify-high-resolution-logo-black-transparent.png'

interface UserAccount {
  userAccount: string;
  userPassword: string;
}

const Login: React.FC = () => {
  const router = useRouter();

  /* LOCAL STATES */

  const [userInfo, setUserInfo] = useState<UserAccount>({
    userAccount: "",
    userPassword: "",
  });
  const [isNewUser, setIsNewUser] = useState<boolean>(true);

  /* ---------------------------------------- */

  /* HANDLERS */

  const handleUserName = (event: React.FormEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, userAccount: event.currentTarget.value });
  };

  const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, userPassword: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard')
    console.log("user info: ->", userInfo);
  };


  /* ---------------------------------------- */

  /* DYNAMIC STYLES */

  const btnLoginStyles = ["text-orange-700 hover:text-orange-900", "Login"];
  const btnRegisterStyles = [
    "text-orange-500 hover:text-orange-700",
    "Register",
  ];

  /* ---------------------------------------- */

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4 sm:p-8">

      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md">

      <div className="w-full flex flex-row justify-end">
        <Image src={eventifyBlackLogo} alt="eventify black icon" width={100} height={100} className=""></Image>
      </div>

        {isNewUser ? (
          <h2 className="mb-6 text-center text-lg sm:text-2xl">Login</h2>
        ) : (
          <h2 className="mb-6 text-center text-lg sm:text-2xl">Register</h2>
        )}
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
              <input
                type="email"
                autoComplete="email"
                placeholder="example@example.com"
                value={userInfo.userAccount}
                onChange={handleUserName}
                required
                className="w-full mt-2 px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <input
                type="password"
                autoComplete="current-password"
                placeholder="password here"
                value={userInfo.userPassword}
                onChange={handleUserPassword}
                required
                className="w-full mt-2 px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="w-14 pl-1 pr-1 border-solid border-2 rounded-md bg-orange-400 border-orange-400 "
            >
              send
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span
              className={`w-full ${
                isNewUser ? btnRegisterStyles[0] : btnLoginStyles[0]
              } text-xs sm:text-sm hover:cursor-pointer pt-8  rounded focus:outline-none`}
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser
                ? `New here? ${btnRegisterStyles[1]}`
                : `Have an account? ${btnLoginStyles[1]}`}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
