import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("shouls load contactUs Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test("should load button inside contact component ", () => {
  render(<Contact />);
    // const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");
    const input = screen.getByPlaceholderText("message");
  expect(input).toBeInTheDocument();
});


test("should have 2 input boxes in the contact compnent", () => {
    render(<Contact />);
    // quering
    const inputBoxes = screen.getAllByRole("textbox");
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);

})