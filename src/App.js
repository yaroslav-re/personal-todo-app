import { useState, useEffect } from "react";
import Todo from "./components/Todo.js";
import Navigation from "./components/Navigation.js";
import AddTodoButton from "./components/AddTodoButton.js";
import { HeaderDate } from "./components/HeaderDate.js";
import { AddTodoModal } from "./components/AddTodoModal.js";
import todoService from "./services/todos";
import loginService from "./services/login";
import TodoLogin from "./pages/TodoLogin.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [important, setImportant] = useState(false);
  const [importance, setImportance] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log("user: ", user);

  useEffect(() => {
    todoService.getAll().then((Response) => {
      setTodos(Response);
    });
  }, []);

  useEffect(() => {
    let loggedUserJSON = window.localStorage.getItem("loggedTodoAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      todoService.setToken(user.token);
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const todoObject = {
      id: todos.length + 1,
      title: title,
      content: newTodo,
      date: new Date().toISOString(),
      important: important,
      importance: importance,
    };
    todoService.create(todoObject).then((returnedTodo) => {
      setTodos(todos.concat(returnedTodo));
      setNewTodo("");
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      todoService.setToken(user.token);
      window.localStorage.setItem("loggedTodoAppUser", JSON.stringify(user));
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("ты не прав");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="bg-slate-200 h-screen">
      {user === null ? (
        <TodoLogin
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <div>
          <div className="absolute top-5 right-5">
            <Navigation />
          </div>
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
      )}
    </div>
  );
}

// выне

export default App;

// единица rem = 16 пикселям

// нужна отдельная страница для todos
// добавить Push Notifications
// добавить авторизацию

// setIsModalOpen(false);
