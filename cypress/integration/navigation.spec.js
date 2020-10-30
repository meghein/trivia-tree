describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to Quiz", () => {
    cy.contains("[data-testid=splash]")
      .click()
      .should("have.class", "q-title")
  });
});