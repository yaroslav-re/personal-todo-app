import { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./components/Todo.js";
import Navigation from "./components/Navigation.js";
import AddTodoButton from "./components/AddTodoButton.js";
import { HeaderDate } from "./components/HeaderDate.js";
import { AddTodoModal } from "./components/AddTodoModal.js";
import { formatCountdown } from "antd/lib/statistic/utils.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/api/todos").then((Response) => {
      setTodos(Response.data);
    });
  }, []);

  const addTodo = () => {
    axios.post("http://localhost:3001/api/todos", {
      id: 2,
      content: "123",
      date: new Date(),
      importance: 1,
      important: false,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-200 h-screen">
      <Navigation />
      {/* задний фон и input */}
      <AddTodoModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-56 flex flex-col justify-start items-center">
        <HeaderDate />
        <div className="w-screen h-56 bg-circles bg-no-repeat bg-cover" />
        <AddTodoButton showModal={showModal} />
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
