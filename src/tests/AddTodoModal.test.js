import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { AddTodoModal } from "../components/AddTodoModal";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

test("buttons are exist", () => {
  render(
    <BrowserRouter>
      <AddTodoModal />
    </BrowserRouter>,
  );
  const returnButton = screen.getByRole("return");
  expect(returnButton).toBeInTheDocument();
  const submitButton = screen.getByRole("submit");
  expect(submitButton).toBeInTheDocument();
});
