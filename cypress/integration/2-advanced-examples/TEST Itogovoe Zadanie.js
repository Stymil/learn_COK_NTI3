describe('horo', function() {
  //Open in Cypress| Set ".only"
  // likely want to do this in a support file
  // so it's applied to all spec files
  // cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  it('By', () => {
    cy.visit('https://lady.mail.ru/')
    cy.contains('Гороскопы').click()
    cy.contains('Все гороскопы').click()  
    cy.scrollTo(0, 1800)
    cy.get('._756dee3138').type('ttest@pivo.chipsi')
    cy.get('._3fdd6ca122 > :nth-child(2)').click() 

    cy.get('._638eadd81a').should('contain', 'Уже есть подписка');

  })
})