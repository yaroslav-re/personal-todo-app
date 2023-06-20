import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { NewTodo } from "./NewTodo";

export const AddTodoModal = ({ isModalOpen }) => {
  return (
    <>
      <Modal title="Adding Todo" visible={isModalOpen} footer={null}>
        <NewTodo />
      </Modal>
    </>
  );
};
