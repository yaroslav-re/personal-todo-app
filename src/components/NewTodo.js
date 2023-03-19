import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../Star.png";
import { v4 as uuidv4 } from "uuid";

export const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState([]);

  const addFormData = (inf) => {
    let data = [...form, inf];
    setForm(data);

    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      date: new Date(),
      importance: 2,
      important: true,
    };

    axios.post("http://localhost:3001/api/todos", ...newTodo);
  };

  const handleSubmit = (e) => {
    addFormData([title, content, time]);

    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p className="w-full justify-items-center grid">
          <input
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="w-full p-3 outline-0 rounded-lg shadow "
            placeholder="Title"
          />
        </p>
        <p className="w-full justify-items-center grid">
          <input
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            className="w-full p-3 outline-0 rounded-lg shadow mt-2"
            placeholder="Description"
          />
        </p>
        <p className="w-full justify-items-center grid">
          <input
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            type="time"
            className="w-full p-3 outline-0 rounded-lg shadow mt-2"
            role="time"
          />
        </p>
        <div className="w-full justify-center flex mt-4">
          <img src={Star} className="h-12" />
          <img src={Star} className="h-12" />
          <img src={Star} className="h-12" />
        </div>
        <p className="w-full justify-items-center grid">
          <input
            type="submit"
            className="shadow-lg p-3 bg-sky-400/50 hover:bg-sky-600/50 active:bg-sky-700/50 rounded-lg w-2/5 cursor-pointer mt-4"
            value="Отправить"
            role="submit"
          />
        </p>
      </form>
    </div>
  );
};
