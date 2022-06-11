import { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
import Todo from "./components/Todo.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/api/todos").then((Response) => {
      setTodos(Response.data);
    });
  }, []);

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
          <div>
            <h1 className="text-2xl text-neutral-100">April</h1>
            <h1 className="text-xl text-neutral-200">2022</h1>
          </div>
          <h1 className="text-lg text-neutral-200 font-serif ml-20">Friday</h1>
        </div>
        <div className="bg-sky-300 opacity-50 w-24 h-24 absolute top-32 left-0 rounded-tr-full" />
        <div className="bg-sky-300 opacity-50 w-20 h-20 absolute top-36 left-0 rounded-tr-full" />
        <div className="bg-sky-300 opacity-50 w-16 h-16 absolute top-40 left-0 rounded-tr-full" />
        <div className="bg-indigo-400 opacity-50 w-20 h-20 absolute top-36 right-0 rounded-tl-full" />
        <div className="bg-indigo-400 opacity-50 w-16 h-16 absolute top-40 right-0 rounded-tl-full" />
      </div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default App;

// единица rem = 16 пикселям
// сверстать дизайн по макету в компоненте App.js

// подправить тудушку (без absolute)

// добавить поле title в db.json и отобразить в тудушках
// отобразить время используя moment.js
//
