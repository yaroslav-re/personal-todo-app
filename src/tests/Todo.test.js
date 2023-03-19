import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Todo from "../components/Todo";

test("todo is rendering properly", () => {
  const todo = {
    title: "title",
    content: "content",
    date: "12/25/1995",
    important: true,
    importance: 1,
  };
  render(<Todo todo={todo} />);

  const title = screen.getByText("title");
  const content = screen.getByText("content");
  const date = screen.getByText("December 25, 1995");
  const time = screen.getByText("12:00 AM");

  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(time).toBeInTheDocument();
});

// полностью протестировать все компоненты
