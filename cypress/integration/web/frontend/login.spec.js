describe('Login Automated test', () => {

    before(() => {
        cy.setupMetamask();
    })
    
    it('Visits https://alpha.naka.im and type email', () => {
        // go to https://alpha.naka.im website
        cy.visit(Cypress.env("SITE_URL"))
        // find element button login and click
        cy.get("a[href='/login']")
            .contains('Log In')
            .click()
        // check path url have to include /login for make sure redirect to login page
        cy.url().should('include', '/login')
        // find element input name='email' and type='email for type email gift@kos.co.th
        cy.get("input[name='email'][type='email']")
            .type('qakosdesign@gmail.com')
            .should('have.value', 'qakosdesign@gmail.com')
        // find element input name='password' and type='password' for type email Geft#027
        cy.get("input[name='password'][type='password']")
            .type('P@sswOrd')
            .should('have.value', 'P@sswOrd')
        // find element button class='btn-submit' and click
        cy.get("button.btn-submit").click()
        // find  button text='CONNECT WALLET' and check exist
        cy.get('button:contains("CONNECT WALLET")').should("exist").click();

        cy.get("img[alt='Metamask']").should("exist").parent().click();

        cy.wait(5000)
       
        cy.acceptMetamaskAccess()

        cy.wait(5000)
        // find  button text='Logout' and check exist
        cy.get('span:contains("Deposit & Withdraw")').should("exist")


    })
})