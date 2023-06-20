import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoLogin = ({
  handleLogin,
  username,
  password,
  setPassword,
  setUsername,
}) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-screen flex flex-col justify-start items-center">
        <div className="bg-slate-100 h-2/3 w-full mt-auto mb-auto flex flex-col">
          <form className="pt-16" onSubmit={handleLogin}>
            <h1 className="text-5xl mb-10 w-full text-center font-medium">
              Log In
            </h1>
            <div className="w-screen justify-items-center grid">
              <input
                type="text"
                name="Username"
                placeholder="Name"
                value={username}
                className="w-4/5 p-3  rounded-lg shadow mb-5 mt-auto mr-auto ml-auto"
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div className="w-screen justify-items-center grid">
              <input
                type="text"
                name="Password"
                placeholder="Password"
                value={password}
                className="w-4/5 p-3  mx-9 rounded-lg shadow mb-10"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <div className="w-screen justify-items-center grid">
              <button
                type="submit"
                className="shadow-lg p-3 bg-sky-400/50 hover:bg-sky-600/50 active:bg-sky-700/50 rounded-lg w-2/5 cursor-pointer"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="w-full flex flex-col items-center mt-5">
            <Link
              to="/signup"
              className="underline underline-offset-1 text-slate-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoLogin;
