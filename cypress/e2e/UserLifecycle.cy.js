

describe('User Life Cycle', () => {
    let createdUserEmail = 'testuser@example.com';

    it('Should register a new user', () => {
        cy.visit('/register');
        cy.get('input[id="FullName"]').type('Test User');
        cy.get('input[id="Email"]').type(createdUserEmail);
        cy.get('input[id="Password"]').type('Test12345');
        cy.get('button[id="register-button"]').click();
        cy.contains('Account created successfully!').should('be.visible');
        cy.wait(3000)
    });

    it('Should login as admin and delete user', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_EMAIL'));
        cy.get('input[name="password"]').type(Cypress.env('CYPRESS_LOGIN_ADMIN_PASSWORD'));
        cy.get('button[name="submit-login"]').click();
        cy.wait(5000);
        cy.visit('/admin/users');
        cy.wait(5000);
        cy.contains('td', createdUserEmail)
            .parent('tr') 
            .find('a') 
            .eq(1)
            .click();
        cy.wait(5000); 
        cy.contains('User was successfully deleted!').should('be.visible'); 
        cy.get('[data-test="logout"]').click();  
    });
});


