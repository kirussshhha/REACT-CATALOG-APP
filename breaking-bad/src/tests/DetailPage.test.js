import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";

const mockStore = configureStore([]);

const renderWithProvider = (component, { store }) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:id" element={component} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Компонент DetailPage", () => {
  it("Рендер дополнительные данные о персонаже", () => {
    const store = mockStore({
      cards: [
        {
          id: "1",
          name: "Walter White",
          birthday: "09-07-1958",
          img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
          status: "Deceased",
        },
      ],
    });

    renderWithProvider(<DetailPage />, { store });

    expect(screen.getByText("Deceased")).toBeInTheDocument();
    expect(screen.getByText("Walter White")).toBeInTheDocument();
    expect(screen.getByText("09-07-1958")).toBeInTheDocument();
  });

  it("Рендер 'Персонаж не найден', если персонаж отсутствует", () => {
    const store = mockStore({
      cards: [],
    });

    renderWithProvider(<DetailPage />, { store });

    expect(screen.getByText("Персонаж не найден")).toBeInTheDocument();
  });
});
