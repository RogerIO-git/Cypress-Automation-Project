import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Contact from '../page/contact.page'
import users from '../data/users.auth.data'
import contacts from '../data/users.contact.data'

describe('Contact', () => {

    beforeEach(() => {
        Auth.login(users)
    })
  
    it('Verify that the user can use the navbar to navigate to the contacts page', () => { 
      cy.get(Product.navbarContact).click()
      cy.url().should('contain', '/contact')
    })
  
    for(let contact of contacts){
        if(contact.valid) {
            it('Verify that the user can use the navbar to navigate to the contacts page', () => { 
                cy.get(Product.navbarContact).click()
                Contact.fillContactForm(
                    contact.first_name,
                    contact.last_name,
                    contact.email,
                    contact.subject,
                    contact.message
                )
                cy.get(Contact.contactSubmitBtn).click()
                cy.get(Contact.contactAlert).should('be.visible')
            })
        }

        if(!(contact.valid)) {
            it(`Verify that the ${contact.missingField} field is required to send a message`, () => { 
                cy.get(Product.navbarContact).click()
                Contact.fillContactForm(
                    contact.first_name,
                    contact.last_name,
                    contact.email,
                    contact.subject,
                    contact.message
                )
                cy.get(Contact.contactSubmitBtn).click()
                cy.get(Contact.contactErrorHint).should('have.text', contact.error)
            })
        }
    }
})