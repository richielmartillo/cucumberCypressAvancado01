import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
        cy.visit('/login.html')
    
});

Given(`que o usuário está na página de login`, () => {
  cy.url().should('include', '/login.html')
  cy.get('#email').should('be.visible')
  cy.get('#password').should('be.visible')
  cy.get('#login-btn').should('be.visible')
});

When(`faço login com credenciais válidas`, () => {
 cy.loginComoUsuarioPadrao()
});

Then(`deve exibir a mensagem {string}`, (mensagem) => {
    cy.url().should('include', '/dashboard.html')
    cy.get('h4').should('contain', mensagem)

});

When(`faço login com senha inválida`, () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('senhaErrada') // <- clave inválida
    cy.get('#login-btn').click()
});

Then(`o sistema deve exibir a mensagem {string}`, (mensagem) => {
    cy.get('#alert-container')
        .should('be.visible')
        .and('have.class', 'alert-danger')
        .and('contain.text', mensagem)
});

