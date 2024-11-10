import { render, screen } from "@testing-library/react";
import PersonStatus from "../components/PersonStatus/PersonStatus";

describe("Компонент PersonStatus", () => {
  it("Применяет класс _alive если статус alive", () => {
    render(<PersonStatus status="Alive" />);
    const element = screen.getByText(/Alive/i);
    expect(element).toHaveClass("_alive");
  });

  it("Применяет класс _deceased если статус deceaced", () => {
    render(<PersonStatus status="Deceased" />);
    const element = screen.getByText(/Deceased/i);
    expect(element).toHaveClass("_deceased");
  });
});
