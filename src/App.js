import { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
import Todo from "./components/Todo.js";
import { Link } from "react-router-dom";
import { TodoDescription } from "./components/TodoDescription.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/api/todos").then((Response) => {
      setTodos(Response.data);
    });
  }, []);

  const addTodo = (e) => {
    axios.post("http://localhost:3001/api/todos", {
      id: 2,
      title: "Workout",
      content: "${e}",
      date: "1657039172000",
      importance: 1,
      done: false,
    });
  };

  return (
    <div className="bg-slate-200 h-screen">
      <button>
        <Link to="/todo">TodoDescription</Link>
      </button>
      <button>
        <Link to="/login">TodoLogin</Link>
      </button>
      <button>
        <Link to="/signup">TodoSignup</Link>
      </button>
      {/* задний фон и input */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-56 flex flex-col justify-start items-center">
        <form onSubmit={() => addTodo({ e: "123" })}>
          <input
            placeholder="search"
            className="bg-sky-400 text-center rounded-xl text-slate-50 text-sm p-1 w-4/5 mb-10 outline-0 mt-3"
          />
          <input type="submit" placeholder="123456" />
        </form>
        <div className="flex items-end bottom-4 w-full px-5 pt-3 pb-5">
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

// нужна отдельная страница для todos
// добавить Push Notifications
// добавить авторизацию

// сверстать страницу Login и страницу TodoDescription

// сделать чтобы добалялись тудушки с полем importance
