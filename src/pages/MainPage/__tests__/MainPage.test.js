import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import WelcomePage from "../../WelcomePage/WelcomePage";

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

it("back to welcome page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </MemoryRouter>
  )
  const backLink = screen.getAllByRole('button')[0];
  fireEvent.click(backLink);
  expect(screen.getByText(/welcome page/i)).toBeInTheDocument();
});
