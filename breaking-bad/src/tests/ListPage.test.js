import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ListPage from "../pages/ListPage/ListPage";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

const initialState = {
  cards: [
    {
      id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Deceased",
    },
    {
      id: 2,
      name: "Jesse Pinkman",
      birthday: "09-24-1984",
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      status: "Alive",
    },
  ],
};

const renderWithProvider = (component, { initialState }) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );
};

describe("Компонент ListPage", () => {
  it("Поиск персонажей", () => {
    renderWithProvider(<ListPage />, { initialState });

    fireEvent.change(screen.getByPlaceholderText("Поиск по имени"), {
      target: { value: "Walter" },
    });

    expect(screen.getByText("Walter White")).toBeInTheDocument();
  });

  it("Поиск при неверном запросе", () => {
    renderWithProvider(<ListPage />, { initialState });

    fireEvent.change(screen.getByPlaceholderText("Поиск по имени"), {
      target: { value: "Skyler" },
    });

    expect(screen.getByText("Персонаж не найден")).toBeInTheDocument();
  });

  it("Отображение персонажей в виде доски и списка", () => {
    renderWithProvider(<ListPage />, { initialState });

    expect(screen.getByText("Доска персонажей")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("Список персонажей")).toBeInTheDocument();
  });
});
