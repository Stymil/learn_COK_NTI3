/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://google.com')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
     cy.get('input[title="Поиск"]')
     .type('Cypress')
     .type('{enter}');


     cy.get('body').should('contain', 'Cypress');
     
      // найти input

      //ввести Cypress

      //нажать Enter

      //убедиться что  выдаче есть Cypress
  })
})
