import React from "react";
import Plus from "../assets/icons/plus.svg";

const AddTodoButton = ({ showModal }) => {
  return (
    <div
      className="absolute bottom-4"
      onClick={() => {
        showModal();
      }}
    >
      <img src={Plus} className="w-12 " />
    </div>
  );
};

export default AddTodoButton;
