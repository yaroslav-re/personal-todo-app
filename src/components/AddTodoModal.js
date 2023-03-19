import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { NewTodo } from "./NewTodo";

export const AddTodoModal = ({
  isModalOpen,
  handleCancel,
  handleOk,
  showModal,
  addTodo,
}) => {
  return (
    <>
      <Modal
        title="Adding Todo"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} role="return">
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={addTodo} role="submit">
            Submit
          </Button>,
        ]}
      >
        <NewTodo />
      </Modal>
    </>
  );
};
