describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Contains correct welcome text', () => {  
    cy.get('[data-test="Welcome-text"]').should('contain.text', 'Welcome')
  })
  it('Should show apple products when type apple and use button search ', () => { 
    cy.contains(/Apple 2024 MacBook Pro/i).should('not.exist'); 
    cy.get('input[name="search"]').type('apple')
    cy.get('button[type="submit"]').click();
    cy.wait(3000)
    cy.contains(/Apple 2024 MacBook Pro/i).should('exist');

  })
  it('Should shows products with price min. $1000 ', () => { 
    cy.contains(/Apple 2024 MacBook Pro/i).should('not.exist'); 
    cy.get('input[name="min"]').type('1000')
    cy.get('button[name="min-max-price"]').click();
    cy.wait(3000)
    cy.contains(/Apple 2024 MacBook Pro/i).should('exist');

  })
  it('Should check electronics chcekbox', () => {
    cy.get('input[id="Electronics"]').check();
    cy.wait(3000)
    cy.contains(/Toshiba UF3F 65/i).should('exist');
    cy.get('input[id="Laptops"]').check();
    cy.wait(3000)
    cy.contains(/Apple iPad PRO/i).should('exist');
    cy.get('input[id="Toys"]').check();
    cy.wait(3000)
    cy.contains(/Toshiba UF3F 65/i).should('not.exist');
    cy.contains(/Apple iPad PRO/i).should('not.exist');

  }) 
})