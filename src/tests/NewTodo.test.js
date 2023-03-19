import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { NewTodo } from "../components/NewTodo";
import { BrowserRouter } from "react-router-dom";

test("inputs are in the document", () => {
  render(
    <BrowserRouter>
      <NewTodo />
    </BrowserRouter>,
  );
  const title = screen.getByPlaceholderText("Title");
  expect(title).toBeInTheDocument();
  const description = screen.getByPlaceholderText("Description");
  expect(description).toBeInTheDocument();
  const time = screen.getByRole("time");
  expect(time).toBeInTheDocument();
  const submit = screen.getByRole("submit");
  expect(submit).toBeInTheDocument();
});
