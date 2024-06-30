import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should search resList for burger text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(8);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
})