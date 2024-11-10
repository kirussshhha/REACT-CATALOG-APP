describe("Навигация", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Главная страница", () => {
    cy.contains("Главная").click();
    cy.url().should("include", "/");
    cy.get(".background-img").should("exist");
  });

  it("Все персонажи", () => {
    cy.contains("Все персонажи").click();
    cy.url().should("include", "/list");
    cy.contains("Доска персонажей").should("exist");
  });
});

describe("Список персонажей", () => {
  beforeEach(() => {
    cy.visit("/list");
  });

  it("Подробная информация о персонаже", () => {
    cy.get(".card").first().click();

    cy.url().should("include", "/details/");

    cy.get(".person-name").should("exist");
    cy.get(".person-birthday").should("exist");
    cy.get(".person-nickname").should("exist");
  });
});

describe("Поиск", () => {
  beforeEach(() => {
    cy.visit("/list");
  });

  it("Поиск персонажей", () => {
    cy.get(".search-inp").type("Walter");
    cy.get(".card").first().contains("Walter").should("exist");
  });

  it("Поиск при не верном запросе", () => {
    cy.get(".search-inp").type("Joe Bidden");
    cy.contains("Персонаж не найден").should("exist");
  });
});

describe("Переключение отображения", () => {
  beforeEach(() => {
    cy.visit("/list");
  });

  it("Переключение на список", () => {
    cy.get(".switch").click();
    cy.get(".list__container").should("exist");
    cy.get(".card-list").should("not.exist");
  });

  it("Переключение на доску", () => {
    cy.get(".card-list").should("exist");
    cy.get(".list__container").should("not.exist");
  });
});
