describe('Login Page suite',{tags:'@Login'},()=>{
    
    before(()=>{
        cy.visit('/'+'my-account')
    })

    it('Enter username',()=>{
        cy.get('#username').type(Cypress.env('userID'))
        cy.log(Cypress.env('userID'))
        cy.screenshot({capture:'runner'})
    })

    it('Enter Password',()=>{
        cy.get('#password').type(Cypress.env('password'))
        cy.log(Cypress.env('password'))
        cy.screenshot({capture:'runner'})
    })

    it('Click on Login button',()=>{
        cy.get('[name="login"]').click()
        cy.get("[class='woocommerce-MyAccount-navigation'] li:nth-child(1) a").should('have.text','Dashboard')
        cy.screenshot({capture:'runner'})
    })
})