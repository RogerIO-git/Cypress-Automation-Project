import { faker } from '@faker-js/faker'
import Auth from '../page/auth.page'
import user from '../data/users.data'
describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify that when the user clicks the sign in or register button they are redirected to a page to sign in ', () => { 
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.url().should('contain', 'https://dev-mlluudmotpwoldtv.us.auth0.com')
    })

    it('Verify that when a user tries to login with an invalid email they are redirected to the products page', () =>{
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
        cy.url().should('contain', '/products')
    })

    it('Verify that when a user tries to login with a valid email and invalid password an alert is displayed indicated one of the entered field is invalid', () => {
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: user },
          (user) => {
            cy.get('#1-email').type(user.valid.email)
            cy.get('#1-password').type(user.invalid.password)
            cy.get('#1-submit').click()
          }
        );
        cy.get(Auth.loginErrorMessage).should('contain',user.invalid.loginErrorMsgAlert)

    })

    it('Verify that when a user tries to login with an invalid email format a message is displayed indicating that the email is invalid', () =>{
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: user },
          (user) => {
            cy.get('#1-email').type(user.invalid.email)
            cy.get('#1-password').type(user.valid.password)
            cy.get('#1-submit').click()
          }
        );
        cy.get(Auth.emailErrorHint).should('contain',user.invalid.errorWarningHint)
    })

    it('Verify that when a user signs up with an account that already exist they should be shown and alert', () => {
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: user },
          (user) => {
            cy.get('.auth0-lock-tabs > li').eq(1).click()
            cy.get('#1-email').type(user.valid.email)
            cy.get('#1-password').type(user.valid.password)
            cy.get('#1-submit').click()

          }
        );
        cy.get(Auth.loginErrorMessage).should('contain',user.invalid.signupErrorMsgAlert)
    })

    it('Verify that a user is able to create an account', ()=>{
        let email = faker.internet.email(undefined, undefined, 'faker.com')
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: {user,email} },
          ({user,email}) => {
            cy.get('.auth0-lock-tabs > li').eq(1).click()
            cy.get('#1-email').type(email)
            cy.get('#1-password').type(user.valid.password)
            cy.get('#1-submit').click()
          }
        );
        cy.url().should('contain', '/products')
    })

})

