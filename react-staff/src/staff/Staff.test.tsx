import React from "react";
import { render, screen } from "@testing-library/react";
import Staff from "./Staff";

test("renders staff", () => {
  render(<Staff />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
