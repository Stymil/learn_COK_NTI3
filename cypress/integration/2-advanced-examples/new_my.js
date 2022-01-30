context('SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('can login', () => {
    cy.get('input[name="user-name"]')
      .type('Username').should('have.value', 'Username')

    cy.get('input[name="password"]')
      .type('Password').should('have.value', 'Password')

    cy.get('input[type="submit"]')
      .click()
      
    cy.get('h3[data-test="error"]').should('contain', 'Username and password do not match any user in this service');
  })
})