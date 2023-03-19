import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { HeaderDate } from "../components/HeaderDate";
import moment from "moment";

test("date is correct", () => {
  render(<HeaderDate />);

  const day = screen.getByText(`${moment().format("DD")}`);
  expect(day).toBeInTheDocument();

  const month = screen.getByText(`${moment().format("MMM")}`);
  expect(month).toBeInTheDocument();

  const year = screen.getByText(`${moment().format("YYYY")}`);
  expect(year).toBeInTheDocument();

  const weekDay = screen.getByText(`${moment().format("dddd")}`);
  expect(weekDay).toBeInTheDocument();
});
