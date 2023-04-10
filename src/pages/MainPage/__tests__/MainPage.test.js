import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";

it("MainPage should render correctly", () => {
  render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
  )
  const mainPage = screen.getByTestId("mainPage");
  const title = screen.getByText(/what are you creating?/i);
  const step = screen.getByText(/Step/i);
  const contentText = screen.getByText(/give us a quick/i);

  expect(mainPage).toBeInTheDocument();
  expect(mainPage).toContainElement(title);
  expect(mainPage).toContainElement(step);
  expect(mainPage).toContainElement(contentText);
  expect(screen.getAllByRole('button')).toHaveLength(5);
  expect(screen.getAllByRole('line')).toHaveLength(3);
  expect(screen.getAllByRole('card')).toHaveLength(5);
});
