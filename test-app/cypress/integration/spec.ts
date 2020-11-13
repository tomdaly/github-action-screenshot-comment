describe('CRA', () => {
  const takeScreenshot = () => cy.screenshot('screenshot', { scale: true });
  const route = Cypress.env('route') || "";
  const url = route // + "/index.html";

  it('shows main header', function () {
    cy.visit(url);
    takeScreenshot();
    cy.get('h1').should('be.visible')
      .and('have.text', 'Test App')
  })
})

export {}
