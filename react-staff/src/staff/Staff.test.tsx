import React from "react";
import { render, screen } from "@testing-library/react";
import Staff from "./Staff";

test("renders staff", () => {
  render(<Staff clef="treble" notes={[60]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
