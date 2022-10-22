import React, { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../Star.png";

export const NewTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [time, setTime] = useState();
  const [form, setForm] = useState([]);

  const addFormData = (inf) => {
    let data = [...form, inf];
    setForm(data);
  };

  const handleSubmit = (e) => {
    addFormData([title, description, time]);
    e.preventDefault();
  };

  console.log("form: ", form);

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
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
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
          />
        </p>
      </form>
    </div>
  );
};
