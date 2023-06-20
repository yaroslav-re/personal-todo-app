import clsx from "clsx";
import React from "react";
import moment from "moment";
import { Rate } from "antd";

import Check from "../assets/icons/Check.png";
import Star from "../assets/icons/Star.png";
import noneImportantStar from "../assets/icons/Star2.png";
import Garbage from "../assets/icons/garbage.svg";

const Todo = ({ todo, handleDelete, randomColor, handleToggleDone }) => {
  return (
    <div>
      <main
        style={{ borderColor: randomColor }}
        className={`bg-slate-100 w-80 h-20 shadow-2xl z-50 mx-auto my-4 border-l-8  z-50`}
      >
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
              !todo.important && "bg-slate-400",
            )}
            onClick={() => {
              handleToggleDone(todo.id, { important: !todo.important });
            }}
          >
            <img src={Check} className="h-3 mr-1 mt-1 " />
          </div>
        </div>
        <div className="flex">
          {/* описание */}
          <h2 className="text-xs font-medium ml-6">{todo.content}</h2>
          {/* удаление */}
          <img
            src={Garbage}
            className="h-6 w-6 ml-auto"
            onClick={() => {
              handleDelete(todo.id);
            }}
          />
          {/* div с звёздочками */}
          <div className="w-20 h-6 flex mr-0 ml-auto">
            {console.log(todo.importance)}
            <Rate count={3} value={todo.importance} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Todo;

//<img src={Star} className="h-4 mr-0 ml-auto" />

// поправить звёзочки
