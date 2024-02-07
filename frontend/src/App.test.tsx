import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

it("checks logo is My Todos", () => {
  render(<App />);
  const logo = screen.getByText("My Todos");
  expect(logo).toBeInTheDocument();
});

it("checks input is on the page and function onChangeInputSearch", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Search");

  fireEvent.change(input, { target: { value: "123" } });
  expect(input).toHaveValue("123");
});
