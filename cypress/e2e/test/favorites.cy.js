import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Favorites from '../page/favorites.page'
import products from '../data/products.data'
import users from '../data/users.auth.data'
describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(Auth.signInOrRegisterBtn).click();
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
    })

    it('Verify that a user is able to navigate to the favorites page from the navbar', () => {
        cy.get(Favorites.favNavbarLinkText).click()

        cy.url().should('contain', 'favorites')
    })

    it('Verify that a user sees not a message indicating that their is no item in favorites if none were favorited', () => {
        cy.get(Favorites.favNavbarLinkText).click()

        cy.get(Favorites.siteheadings).eq(1).should('have.text', 'No favorites added!')
    })

    it('Verify that a user can favorite a product from the product gallery', () => {
        Favorites.addItemToFavorite(0)
        cy.get(Favorites.favAlertTitle).should('have.text', `${products.products[0].name.trim()} added to favorites`)
        cy.get(Favorites.favAlertCloseIcon).click()
        cy.get(Favorites.favNavbarLinkText).click()

        cy.get(Product.productName).should('have.text', products.products[0].name.trim())
    })

    it('Verify that a user can remove a favorited item from the favorite page', () => {
        Favorites.addItemToFavorite(0)
        cy.get(Favorites.favAlertTitle).should('have.text', `${products.products[0].name.trim()} added to favorites`)
        cy.get(Favorites.favAlertCloseIcon).click()
        cy.get(Favorites.favNavbarLinkText).click()

        cy.get(Favorites.favPageItemRemove).click()
        cy.get(Favorites.favAlertTitle).should('have.text', `${products.products[0].name.trim()} removed from favorites`)
        cy.get(Favorites.favAlertCloseIcon).click()
        cy.get(Favorites.siteheadings).eq(1).should('have.text', 'No favorites added!')

    })

    it('Verify that a user cannot favorite an item that is already favorited', () => {
        Favorites.addItemToFavorite(0)
        cy.get(Favorites.favAlertTitle).should('have.text', `${products.products[0].name.trim()} added to favorites`)
        cy.get(Favorites.favAlertCloseIcon).click()

        Favorites.removeItemFromFavorite(0)
        cy.get(Favorites.favAlertTitle).should('have.text', `${products.products[0].name.trim()} removed from favorites`)
    })

})