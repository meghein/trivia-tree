describe('Navigation', () => {
  beforeEach(() => {
    cy.visit("/")
      .get('[data-testid=splash-button]').click()
  })
  it("should visit root", () => {
  });
  it('should reload to the splash page if app is refreshed', () => {
    cy.reload(true)
      .get('.splash-page')
  })
  it('should display "Correct!" when a correct answer is clicked', () => {
    cy.get('[data-testid=correct]').click()
      .get('#nextQ')
      .should('contain', 'Correct!')
  })
  it('should display "Wrong!" when a incorrect answer is clicked', () => {
    cy.get('[data-testid=incorrect1]')
    ? cy.get('[data-testid=incorrect1]').click()
    : cy.get('[data-testid=incorrect2]').click()
        .get('#nextQ')
        .should('contain', 'Wrong!')
  })
  it('should display the user\'s score after 10 questions', () => {
    for (let i = 0; i < 10; i++) {
      cy.get('.a1').click()
        .get('#nextQ').click()
    }
    cy.get('#score')
      .should('contain', 'Your score')
  })
  it('should load a new quiz when a user clicks "play again?"', () => {
    for (let i = 0; i < 10; i++) {
      cy.get('.a1').click()
        .get('#nextQ').click()
    }
    cy.get('.play-again')
      .click()
      .get('#quiz')
      
  })
});