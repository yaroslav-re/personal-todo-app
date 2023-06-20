import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../assets/icons/Star.png";
import { v4 as uuidv4 } from "uuid";
import todoService from "../services/todos";
import { Rate } from "antd";

export const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState([]);
  const [importance, setImportance] = useState(0);

  const addFormData = () => {
    console.log(time);

    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      date: time,
      importance: importance,
      important: true,
    };

    todoService.create(newTodo);
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="w-full justify-items-center grid">
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
        </div>
        <div className="w-full justify-items-center grid">
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
        </div>
        <div className="w-full justify-items-center grid">
          <input
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            type="datetime-local"
            className="w-full p-3 outline-0 rounded-lg shadow mt-2"
            role="time"
          />
        </div>
        <div className="w-full justify-center flex mt-4">
          <Rate
            count={3}
            defaultValue={2}
            onChange={(rate) => {
              setImportance(rate);
            }}
          />
        </div>
        <div className="w-full justify-items-center grid">
          <input
            type="submit"
            className="shadow-lg p-3 bg-sky-400/50 hover:bg-sky-600/50 active:bg-sky-700/50 rounded-lg w-2/5 cursor-pointer mt-4"
            value="Отправить"
            role="submit"
          />
        </div>
      </form>
    </div>
  );
};
