class Contact {

    //Contact form elements
    get contactFirstNameField() { return ('#firstName') }
    get contactLastNameField() { return ('#lastName') }
    get contactEmailField() { return ('#email') }
    get contactSubjectField() { return ('#subject') }
    get contactMessageField() { return ('#message') }
    get contactSubmitBtn() { return ('.chakra-button.css-vs0e4t')}

    get contactAlert() { return ('#toast-1') }
    get contactErrorHint() { return ('.chakra-form__error-message') }

    fillContactForm(
        firstName,
        lastName,
        email,
        subject,
        message
    ){
        if(firstName !== ''){
            cy.get(this.contactFirstNameField).type(firstName)
        }
        if(lastName !== ''){
            cy.get(this.contactLastNameField).type(lastName)
        }
        if(email !== ''){
            cy.get(this.contactEmailField).type(email)
        }
        if(subject !== ''){
            cy.get(this.contactSubjectField).type(subject)
        }
        if(message !== ''){
            cy.get(this.contactMessageField).type(message)
        }
    }

}
export default new Contact()