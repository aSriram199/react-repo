import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CounterApp from "./App";

test("To test the rendering of the counter", () => {
  const { getByText } = render(<CounterApp />);
  const counterElement = getByText(/Counter/i);

  expect(counterElement).toBeInTheDocument();
});

test("When the increment button is pressed", () => {
  const { getByText } = render(<CounterApp />);
  const incbtn = getByText(/increment/i);

  fireEvent.click(incbtn);

  const counterElement = getByText(/Counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test("When the decrement button is pressed", () => {
  const { getByText } = render(<CounterApp />);
  const decbtn = getByText(/decrement/i);

  fireEvent.click(decbtn);

  const counterElement = getByText(/Counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});
