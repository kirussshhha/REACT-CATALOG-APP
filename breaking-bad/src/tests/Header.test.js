import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe("Компонент Header", () => {
  it("Ссылки корректно рендерятся", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Breaking bad")).toBeInTheDocument();
    expect(screen.getByText("Главная")).toBeInTheDocument();
    expect(screen.getByText("Все персонажи")).toBeInTheDocument();
  });

  it("Активна ли ссылка при нажатии", () => {
    renderWithRouter(<Header />);
    const charactersLink = screen.getByText("Все персонажи");

    expect(charactersLink).not.toHaveClass("item-active");

    fireEvent.click(charactersLink);

    expect(charactersLink).toHaveClass("item-active");
  });
});
