import { faker } from '@faker-js/faker'
import Auth from '../page/auth.page'
import users from '../data/users.auth.data'
describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify that when the user clicks the sign in or register button they are redirected to a page to sign in ', () => { 
        cy.get(Auth.signInOrRegisterBtn).click();
        //Login on to site.
        cy.url().should('contain', 'https://dev-mlluudmotpwoldtv.us.auth0.com')
    })

    for(let user of users){
      if(user.authType === 'login'){
        if(user.valid){
          it(`Verify user logging in with ${user.userType}`, () =>{
            cy.get(Auth.signInOrRegisterBtn).click();
            //Login on to site.
            cy.origin(
              "https://dev-mlluudmotpwoldtv.us.auth0.com",
              { args: user },
              (user) => {
                cy.get('#1-email').type(user.email)
                cy.get('#1-password').type(user.password)
                cy.get('#1-submit').click()
              }
            );
            cy.url().should('contain', user.url)
          })
        }

        if(!(user.valid)){
          it(`Verify user logging in with ${user.userType}`, () => {
            cy.get(Auth.signInOrRegisterBtn).click();
            //Login on to site.
            cy.origin(
              "https://dev-mlluudmotpwoldtv.us.auth0.com",
              { args: user },
              (user) => {
                cy.get('#1-email').type(user.email)
                cy.get('#1-password').type(user.password)
                cy.get('#1-submit').click()
              }
            );
            cy.get(Auth.loginErrorMessage).should('contain',user.errorMsgAlert)
          })
        }
      }
      if(user.authType === 'signUp'){
        if((user.valid)){
          it(`Verify that signing up with ${user.userType}`, ()=>{
            let email = faker.internet.email(undefined, undefined, 'faker.com')
            cy.get(Auth.signInOrRegisterBtn).click();
            //Login on to site.
            cy.origin(
              "https://dev-mlluudmotpwoldtv.us.auth0.com",
              { args: {user, email} },
              ({user, email}) => {
                cy.get('.auth0-lock-tabs > li').eq(1).click()
                if(user.email !== ''){
                  cy.get('#1-email').type(user.email)
                }else{
                  cy.get('#1-email').type(email)
                }
                
                cy.get('#1-password').type(user.password)
                cy.get('#1-submit').click()
              }
            );
            cy.url().should('contain', user.url)
          })
        }

        if(!(user.valid)){
          it(`Verify that signing up with ${user.userType}`, ()=>{
            cy.get(Auth.signInOrRegisterBtn).click();
            //Login on to site.
            cy.origin(
              "https://dev-mlluudmotpwoldtv.us.auth0.com",
              { args: user },
              (user) => {
                cy.get('.auth0-lock-tabs > li').eq(1).click()
                cy.get('#1-email').type(user.email)
                cy.get('#1-password').type(user.password)
                cy.get('#1-submit').click()
              }
            );
            cy.get(Auth.loginErrorMessage).should('contain',user.errorMsgAlert)
          })
        }
      }
    }
})

