import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { NewTodo } from "./NewTodo";

export const AddTodoModal = ({
  isModalOpen,
  handleCancel,
  handleOk,
  showModal,
}) => {
  console.log("click", isModalOpen);
  return (
    <>
      <Modal title="Basic Modal" visible={isModalOpen} onCancel={handleCancel}>
        <NewTodo />
      </Modal>
    </>
  );
};
