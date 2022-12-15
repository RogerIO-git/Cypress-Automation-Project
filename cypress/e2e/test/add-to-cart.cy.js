import { faker } from '@faker-js/faker'
import Auth from '../page/auth.page'
import user from '../data/users.data'
describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: user },
          (user) => {
            cy.get('#1-email').type(user.valid.email)
            cy.get('#1-password').type(user.valid.password)
            cy.get('#1-submit').click()
          }
        );
    })

    it('Verify that a user can add a single item to the cart', () => {

    })

})

