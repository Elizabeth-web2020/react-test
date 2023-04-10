import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "../WelcomePage";
it("WelcomePage should render correctly", () => {
  render(
    <BrowserRouter>
      <WelcomePage />
    </BrowserRouter>
)
  const welcomePage = screen.getByTestId("welcomePage");
  const title = screen.getByText(/Welcome Page/i);
  const button = screen.getByRole("button");

  expect(welcomePage).toBeInTheDocument();
  expect(welcomePage).toContainElement(title);
  expect(welcomePage).toContainElement(button);
});