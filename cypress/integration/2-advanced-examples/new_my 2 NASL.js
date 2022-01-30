context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://nasledie-predkov.com/')
  })

  it('.type() - type into a DOM element', () => {
    cy.get ('input[name="s"]')
     .type('Cypress')
     .type('{enter}');


     cy.get('body').should('contain', 'Cypress');
     
      // найти input

      //ввести Cypress

      //нажать Enter

      //убедиться что  выдаче есть Cypress
  })
})