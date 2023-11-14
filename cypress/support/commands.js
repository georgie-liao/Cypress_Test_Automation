

Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input[value="Login"]').click()
})
