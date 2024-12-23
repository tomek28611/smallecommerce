describe('Login, choose product, add them to cart, cart operations', () => {
    it('Should login', () => {
      cy.visit('/login');
      cy.contains(/User Dashboard/i).should('not.exist');
      cy.get('input[name="email"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_PASSWORD'));
      cy.get('button[name="submit-login"]').click();
      cy.contains(/User Dashboard/i).should('exist');
    });

    it('Should go to Home and add products to cart, show cart', () => {
      cy.visit('/'); 
      cy.get('[data-test="products-list"]').within(() => {
        cy.get('article').its(0).within(() => {
            cy.get("a").click()
        })
      })
      cy.wait(3000)
      cy.get('button[data-test="add-to-cart-button"]').click()
      cy.get('[data-test="open-cart"]').click()
      cy.wait(3000)
      cy.get('button[data-test="continue-to-checkout-button"]').click()
    }) 
    });
 