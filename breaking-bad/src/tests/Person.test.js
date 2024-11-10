import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Person from "../components/Person/Person";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Компонент Person", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("Корректный рендер при передаче параметров", () => {
    render(
      <MemoryRouter>
        <Person name="Walter White" status="Deceased" birthday="09-07-1958" id={1} />
      </MemoryRouter>
    );

    expect(screen.getByText("Walter White")).toBeInTheDocument();
    expect(screen.getByText("Deceased")).toBeInTheDocument();
    expect(screen.getByText("09-07-1958")).toBeInTheDocument();
  });

  it("Перенаправляет при клике на компонент на DetailPage", () => {
    render(
      <MemoryRouter>
        <Person name="Walter White" status="Deceased" birthday="09-07-1958" id={1} />
      </MemoryRouter>
    );

    const personContainer = screen.getByText("Walter White");
    userEvent.click(personContainer);

    expect(mockNavigate).toHaveBeenCalledWith("/details/1");
  });
});
