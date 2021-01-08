describe('CRA', () => {
  const route = Cypress.env('route') || "";
  const url = route // + "/index.html";
  const fileName = 'screenshot-' + (Cypress.env('commentId') || "");
  const takeScreenshot = () => cy.screenshot(fileName, { scale: true });

  it('shows main header', function () {
    cy.visit(url);
    takeScreenshot();
    cy.get('h1').should('be.visible')
      .and('have.text', 'Test App')
  })
})

export {}
