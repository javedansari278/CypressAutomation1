describe('Login Page suite',()=>{
    
    before(()=>{
        cy.visit('/'+'my-account')
    })

    it('Enter username',()=>{
        cy.get('#username').type(Cypress.env('userID'))
    })

    it('Enter Password',()=>{
        cy.get('#password').type(Cypress.env('password'))
    })
})