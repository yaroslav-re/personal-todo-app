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
  const [user, setUser] = useState(
    window.localStorage.getItem("loggedTodoAppUser"),
  );
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let loggedUserJSON = window.localStorage.getItem("loggedTodoAppUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      todoService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    todoService.getAll(user).then((Response) => {
      setTodos(Response);
    });
  }, [user]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    todoService.todoDelete(id);
    window.location.reload();
  };

  const handleToggleDone = (id, value) => {
    todoService.update(id, value);
    window.location.reload();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedTodoAppUser", JSON.stringify(user));
      todoService.setToken(user.token);

      setUser(user);
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
    <div>
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
          <AddTodoModal isModalOpen={isModalOpen} />
          <div className="bg-gradient-to-r from-sky-400 to-sky-700 w-full h-56 flex flex-col justify-start items-center">
            <HeaderDate />

            <AddTodoButton showModal={showModal} />
          </div>
          {todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                handleDelete={handleDelete}
                handleToggleDone={handleToggleDone}
                key={todo.id}
                randomColor={
                  `#` + `${Math.floor(Math.random() * 16777215).toString(16)}`
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;

// единица rem = 16 пикселям

// adding todo
// stars in adding todo

// все запросы с фронта должны отправляться с токеном, на backend все запросы должны проверяться на наличие токена

// в каждой todo должна быть иконка мусорного ведра, при клике на которое отправляется delete запрос с id
