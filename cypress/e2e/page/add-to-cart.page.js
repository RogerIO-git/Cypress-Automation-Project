class Add {

    get signInOrRegisterBtn() { return ('#signInOrRegister') }
    get emailField() { return ('#1-email') }
    get passwordField() { return ('#1-password') }
    get authSubmitBtn() { return ('#1-submit') }
    get loginErrorMessage() { return ('.auth0-global-message-error') }
    get emailErrorHint() { return ('.auth0-lock-error-invalid-hint') }

    get loginAndSignupNav() { return ('.auth0-lock-tabs > li') }
    get currentAuthTab() { return ('.auth0-lock-tabs-current') }

    get signOutBtn() { return ('#top-sign-out')}



    login(email, password) {
        cy.get(this.emailField).type(email)
        cy.get(this.passwordField).type(password)
        cy.get(this.authSubmitBtn).click()
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