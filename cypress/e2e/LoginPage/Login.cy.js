describe('Login Page suite',()=>{
    
    before(()=>{
        cy.visit('/'+'my-account')
    })

    it('Enter username',()=>{
        cy.get('#username').type(Cypress.env('userID'))
        cy.log(Cypress.env('userID'))
        cy.screenshot()
    })

    it('Enter Password',()=>{
        cy.get('#password').type(Cypress.env('password'))
        cy.log(Cypress.env('password'))
        cy.screenshot()
    })
})