import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { TodoDescription } from "../components/TodoDescription";
import { BrowserRouter } from "react-router-dom";

test("inputs are in the document", () => {
  render(
    <BrowserRouter>
      <TodoDescription />
    </BrowserRouter>,
  );
  const title = screen.getByPlaceholderText("Title");
  expect(title).toBeInTheDocument();
  const description = screen.getByPlaceholderText("Description");
  expect(description).toBeInTheDocument();
  const time = screen.getByRole("time");
  expect(time).toBeInTheDocument();
  const submit = screen.getByPlaceholderText("Submit");
  expect(submit).toBeInTheDocument();
});
