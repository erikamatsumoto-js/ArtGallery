describe('Art Gallery test spec', () => {
  it('navigates to my site', () => {
    cy.visit('http://localhost:5173/')
  });

  it('searches for "mone" and displays results', () => {
  cy.visit('http://localhost:5173/');
  cy.get('.card').should('have.length', 0); 
  cy.get('input').type('mone');
  cy.get('#searchbutton').click();
  cy.get('.card').should('have.length.gt', 0);

  });

  it('opens modal', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.card').first().click();
    cy.get('.modal-body').should('be.visible');
  })
})