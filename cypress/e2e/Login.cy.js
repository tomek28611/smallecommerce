describe('Test login and logout admin', () => {
    it('Should login check and logout admin', () => {
      cy.visit('/login');
      cy.contains(/User Dashboard/i).should('not.exist');
      cy.get('input[name="email"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_PASSWORD'));
      cy.get('button[name="submit-login"]').click();
      cy.url().should('include', '/me');
      cy.contains(/User Dashboard/i).should('exist');
      cy.get('[data-test="logout"]').click();
    });
  });
  