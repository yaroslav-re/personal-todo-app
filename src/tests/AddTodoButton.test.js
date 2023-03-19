import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import AddTodoButton from "../components/AddTodoButton";

test("button is exist", () => {
  render(<AddTodoButton />);
  const button = screen.getByRole("AddTodoButton");
  expect(button).toBeInTheDocument();
});
