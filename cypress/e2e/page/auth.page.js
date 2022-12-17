class Authentication {

    get signInOrRegisterBtn() { return ('#signInOrRegister') }
    get emailField() { return ('#1-email') }
    get passwordField() { return ('#1-password') }
    get authSubmitBtn() { return ('#1-submit') }
    get loginErrorMessage() { return ('.auth0-global-message-error') }
    get emailErrorHint() { return ('.auth0-lock-error-invalid-hint') }

    get loginAndSignupNav() { return ('.auth0-lock-tabs > li') }
    get currentAuthTab() { return ('.auth0-lock-tabs-current') }

    get signOutBtn() { return ('#top-sign-out')}



    login(users) {
        cy.visit('/')
        cy.get(this.signInOrRegisterBtn).click();
        //Login on to site.
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: users },
          (users) => {
            cy.get('#1-email').type(users[0].email)
            cy.get('#1-password').type(users[0].password)
            cy.get('#1-submit').click()
          }
        );
    }

    logout() {
        cy.get(this.mainMenuBtn).click()
        cy.get(this.logOutBtn).click()
    }

    switchAuthTab() {
        if (this.loginAndSignupNav.eq(0).should('have.class', this.currentAuthTab.className())) {
            cy.get(this.loginAndSignupNav.eq(1)).click()
        }
        else{
            cy.get(this.loginAndSignupNav.eq(0)).click()
        }
    }
}
export default new Authentication()