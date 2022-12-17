import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import users from '../data/users.auth.data'
import products from '../data/products.data'

describe('Filter and Sort', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get(Auth.signInOrRegisterBtn).click();
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: users },
            (users) => {
            cy.get('#1-email').type(users[0].email)
            cy.get('#1-password').type(users[0].password)
            cy.get('#1-submit').click()
            }
        );
    })

    it(`Verify that a user is able to search for an item using it's full name`, () => { 
        Product.doSearch(products.products[0].name.trim())

        cy.get(Product.productName).should('contain', products.products[0].name.trim())
    })

    it(`Verify that a user is able to search for an item using it's its partial name`, () => { 
        Product.doSearch(products.products[0].name.trim().slice(2))

        cy.get(Product.productName).should('contain', products.products[0].name.trim())
    })

    it(`Verify that a user is able to reset the search filter`, () => { 
        Product.doSearch(products.products[0].name.trim().slice(2))

        cy.get(Product.productResetFilter).click()
        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

    it(`Verify that a user sees not items on the product page if a invalid item is searched `, () => { 
        Product.doSearch('tttt')

        cy.get(Product.productTile).should('not.exist')
    })
})