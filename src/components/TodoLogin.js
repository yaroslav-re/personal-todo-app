import React from "react";
import { Link } from "react-router-dom";

export const TodoLogin = () => {
  return (
    <div>
      {/* задний фон */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-screen flex flex-col justify-start items-center">
        <div className="bg-slate-100 h-2/3 w-full mt-auto mb-auto flex flex-col">
          <Link
            to="/"
            className="absolute text-lg bg-slate-200/75 px-4 py-2 hover:bg-slate-300/100 text-slate-500/50"
          >
            Back
          </Link>
          <form className="pt-16">
            <h1 className="text-5xl mb-10 w-full text-center top-0 font-medium">
              Log In
            </h1>
            <p className="w-screen justify-items-center grid">
              <input
                type="text"
                name="login"
                placeholder="Email"
                className="w-4/5 p-3 outline-0 rounded-lg shadow mb-5 mt-auto mr-auto ml-auto"
              />
            </p>
            <p className="w-screen justify-items-center grid">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-4/5 p-3 outline-0 mx-9 rounded-lg shadow mb-10"
              />
            </p>
            <p className="w-screen justify-items-center grid">
              <input
                type="submit"
                className="shadow-lg p-3 bg-sky-400/50 hover:bg-sky-600/50 active:bg-sky-700/50 rounded-lg w-2/5 cursor-pointer"
                placeholder="Submit"
              ></input>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
