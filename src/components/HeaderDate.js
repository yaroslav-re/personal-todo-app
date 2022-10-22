import moment from "moment";
import React from "react";

export const HeaderDate = () => {
  return (
    <div>
      <div className="flex items-end bottom-4 w-full px-5 pt-3 pb-5 mt-12">
        <h1 className="text-6xl text-lime-400 mr-2 z-30">
          {moment().format("DD")}
        </h1>
        <div>
          <h1 className="text-2xl text-neutral-100">
            {moment().format("MMM")}
          </h1>
          <h1 className="text-xl text-neutral-200">
            {moment().format("YYYY")}
          </h1>
        </div>
        <h1 className="text-lg text-neutral-200 font-serif ml-20">
          {moment().format("dddd")}
        </h1>
      </div>
    </div>
  );
};
