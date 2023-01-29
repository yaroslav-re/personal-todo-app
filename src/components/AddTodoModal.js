import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { NewTodo } from "./NewTodo";
import axios from "axios";

export const AddTodoModal = ({
  isModalOpen,
  handleCancel,
  handleOk,
  showModal,
}) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <NewTodo />
      </Modal>
    </>
  );
};
