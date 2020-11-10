describe('CRA', () => {
  const takeScreenshot = () => cy.screenshot('screenshot', { scale: true });

  it('shows learn link', function () {
    cy.visit('http://localhost:3000')
    takeScreenshot();
    cy.get('.App-link').should('be.visible')
      .and('have.text', 'Learn React')
  })
})

export {}
