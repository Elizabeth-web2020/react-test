import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "../WelcomePage";
import MainPage from "../../MainPage/MainPage"
it("WelcomePage should render correctly", () => {
  render(
    <BrowserRouter>
      <WelcomePage />
    </BrowserRouter>
  )
  const welcomePage = screen.getByTestId("welcomePage");
  const title = screen.getByText(/welcome page/i);
  const button = screen.getByRole("button");

  expect(welcomePage).toBeInTheDocument();
  expect(welcomePage).toContainElement(title);
  expect(welcomePage).toContainElement(button);
});

it("goes to main page", () => {
  render(
    <MemoryRouter initialEntries={["/welcome"]}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </MemoryRouter>
  )
  const goLink = screen.getByRole("button");
  fireEvent.click(goLink);
  expect(screen.getByText(/step/i)).toBeInTheDocument();
});