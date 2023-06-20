import React from "react";
import { Link } from "react-router-dom";
import Star from "../assets/icons/Star.png";

export const TodoDescription = (todo) => {
  return (
    <div>
      {/* задний фон */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-screen flex">
        <div className="bg-slate-100 h-2/3 w-full mt-auto mb-auto flex">
          <Link
            to="/"
            className="absolute text-lg bg-slate-200/75 px-4 py-2 hover:bg-slate-300/100 text-slate-500/50"
          >
            Back
          </Link>
          <form
            className="h-full"
            onSubmit={() => {
              alert(123);
            }}
          >
            <div className="w-screen justify-items-center grid">
              <input
                type="text"
                className="w-4/5 p-3 outline-0 rounded-lg shadow mt-12 mr-auto ml-auto"
                placeholder="Title"
                role="Title"
              />
            </div>
            <div className="w-screen justify-items-center grid">
              <input
                type="text"
                className="w-4/5 p-3 outline-0 rounded-lg mt-4 shadow mr-auto ml-auto"
                placeholder="Description"
              />
            </div>
            <div className="w-screen justify-items-center grid">
              <input
                type="time"
                className="w-4/5 p-3 outline-0 rounded-lg mt-4 shadow mr-auto ml-auto"
                role="time"
              />
            </div>
            <div className="w-screen justify-center flex mt-4">
              <img src={Star} className="h-12" />
              <img src={Star} className="h-12" />
              <img src={Star} className="h-12" />
            </div>
            <div className="w-screen justify-items-center grid">
              <input
                type="submit"
                className="shadow-lg p-3 bg-sky-400/50 hover:bg-sky-600/50 active:bg-sky-700/50 rounded-lg w-2/5 cursor-pointer mt-4"
                placeholder="Submit"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
