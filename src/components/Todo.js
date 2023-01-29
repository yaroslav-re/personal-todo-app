import clsx from "clsx";
import React from "react";
import moment from "moment";
import { Navigate } from "react-router-dom";

import Check from "../Check.png";
import Star from "../Star.png";
import noneImportantStar from "../Star2.png";

export default function ({ todo }) {
  const { importance } = todo;
  // console.log("importance: ", importance);
  const noneImportant = 3 - importance;

  return (
    <div>
      {/* здесь начинается первая тудушка */}
      <main className="bg-slate-100 w-10/12 h-20 shadow-xl z-50 mx-auto mt-4 border-l-8 border-sky-500 z-50">
        <div className="flex">
          {/* заголовок */}
          <h1 className="text-lg font-medium ml-6 pt-3">{todo.title}</h1>
          {/* время */}
          <h3 className="text-sm font-semibold ml-auto mt-5 mr-2">
            {moment(todo.date).format("LL")}
          </h3>
          <h3 className="text-sm font-semibold ml-auto mt-5 mr-2">
            {moment(todo.date).format("LT")}
          </h3>
          {/* галочка в правом верхнем углу */}
          <div
            className={clsx(
              "bg-sky-500 rounded-bl-full pl-2 pb-0 h-6",
              todo.done && "bg-slate-400",
            )}
          >
            <img src={Check} className="h-3 mr-1 mt-1 " />
          </div>
        </div>
        <div className="flex">
          {/* описание */}
          <h2 className="text-xs font-medium ml-6">{todo.content}</h2>
          {/* div с звёздочками */}
          <div className="w-20 h-6 flex mr-0 ml-auto">
            {Array.from(Array(todo.importance), (e, i) => {
              return <img src={Star} key={i} className="h-4 pl-1" />;
            })}
            {Array.from(Array(noneImportant), (e, i) => {
              return (
                <img src={noneImportantStar} key={i} className="h-4 pl-1 " />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

//<img src={Star} className="h-4 mr-0 ml-auto" />

// поправить звёзочки
