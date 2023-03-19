import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import Navigation from "../components/Navigation";
import { BrowserRouter } from "react-router-dom";

test("links are in the document", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );
  const login = screen.getByText("Log In");
  expect(login).toBeDefined();
  const signup = screen.getByText("Sign Up");
  expect(signup).toBeDefined();
});
