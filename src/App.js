import { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";

import Check from "./Check.png";
import Star from "./Star.png";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((Response) => {
      setTodos(Response.data);
    });
  }, []);

  console.log(todos);

  return (
    <div className="bg-slate-200 h-screen">
      {/* задний фон и input */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-600 w-full h-56 flex flex-col justify-start items-center">
        <Input
          prefix={<SearchOutlined />}
          placeholder="search"
          className="bg-sky-400 text-center top-4 rounded-xl text-slate-100 text-sm p-1 w-4/5 mb-10"
        />
        <div className="flex items-end bottom-4 w-full p-5">
          {/* дата */}
          <h1 className="text-6xl text-lime-400 mr-2">15</h1>
          <p>
            <h1 className="text-2xl text-neutral-100">April</h1>
            <h1 className="text-xl text-neutral-200">2022</h1>
          </p>
          <h1 className="text-lg text-neutral-200 font-serif ml-20">Friday</h1>
        </div>
        <div className="bg-sky-300 opacity-50 w-24 h-24 absolute top-32 left-0 rounded-tr-full" />
        <div className="bg-sky-300 opacity-50 w-20 h-20 absolute top-36 left-0 rounded-tr-full" />
        <div className="bg-sky-300 opacity-50 w-16 h-16 absolute top-40 left-0 rounded-tr-full" />
        <div className="bg-indigo-400 opacity-50 w-20 h-20 absolute top-36 right-0 rounded-tl-full" />
        <div className="bg-indigo-400 opacity-50 w-16 h-16 absolute top-40 right-0 rounded-tl-full" />
      </div>
      <ul>
        {todos &&
          todos.map((todo) => {
            <li key={todo.id}>{todo.content}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;

// единица rem = 16 пикселям
// сверстать дизайн по макету в компоненте App.js

// подправить тудушку (без absolute)

// {/* полосочка слева */}
// <div className="w-1.5 h-20 bg-sky-500">
// <h1 className="text-lg font-medium">Meeting</h1>
// <h2 className="text-xs font-medium">Room 408, east 2 layer</h2>
// {/* галочка в правом верхнем углу */}
// <div className="bg-sky-500 w-8 h-8 rounded-bl-full" />
// {/* время */}
// <h3 className="text-sm font-semibold">10:30</h3>
// </div>

// {/* здесь начинается первая тудушка */}
// <div className="bg-slate-100 w-10/12 h-20 shadow-xl z-50 mx-auto mt-4 border-l-8 border-sky-500 z-50">
// <div className="flex justify-beetween">
//   {/* заголовок */}
//   <h1 className="text-lg font-medium ml-6 pt-3">Meeting</h1>
//   {/* время */}
//   <h3 className="text-sm font-semibold ml-auto mt-5 mr-2">10:30</h3>
//   {/* галочка в правом верхнем углу */}
//   <div className="bg-sky-500 rounded-bl-full pl-2 pb-0 h-6">
//     <img src={Check} className="h-3 mr-1 mt-1 " />
//   </div>
// </div>
// <div className="flex justify-beetween">
//   {/* описание */}
//   <h2 className="text-xs font-medium ml-6">Room 408, east 2 layer</h2>
//   {/* div с звёздочками */}
//   <div className="w-20 h-6 flex justify-beetween mr-0 ml-auto">
//     <img src={Star} className="h-4 mr-0 ml-auto" />
//     <img src={Star} className="h-4 mr-0 ml-auto" />
//     <img src={Star} className="h-4 mr-6 ml-auto" />
//   </div>
// </div>
// </div>
