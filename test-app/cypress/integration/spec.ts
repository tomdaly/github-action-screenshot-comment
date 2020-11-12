describe('CRA', () => {
  const takeScreenshot = () => cy.screenshot('screenshot', { scale: true });
  const route = Cypress.env('route') ? "/" + Cypress.env('route') : "";
  const url = route + "/index.html"

  it('shows learn link', function () {
    cy.visit(url);
    takeScreenshot();
    cy.get('.App-link').should('be.visible')
      .and('have.text', 'Learn React')
  })
})

export {}
