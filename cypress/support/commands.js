// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('suiteSetup', () => {
    const pathname = window.location.pathname;

    const substr = pathname.substring(pathname.indexOf('integration') + 11, pathname.indexOf('.spec.js'));
    const dataDir = substr.replace(/%2F/gi, '/').substring(1) + '/';
    const uri = substr.replace(/%2F/gi, '/').substring(substr.indexOf('api') + 1);
    const url = Cypress.env('api').host + uri;
    console.log(dataDir);
    cy.wrap(dataDir).as('data-dir');
    cy.wrap(url).as('url');
})

Cypress.Commands.add('getFixture', (path) => {
    cy.get('@data-dir').then((dir) => {
        return cy.fixture(dir + path);
    });
})
    //Get Authorization
Cypress.Commands.add('getAuthToken', () => {
    cy.request({
        method: 'PUT',
        url: 'https://api.naka.im/api/auth/authentication',
        body: {
            "data": {
                "email": "gift@kos.co.th",
                "password": "Geft#027"
            }
        }
    })  
        .then((response) => {
        cy.wrap(response.body.jwtToken).as('token')
        })
})
