import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import products from '../data/products.data'
import users from '../data/users.auth.data'
describe('Cart', () => {
    beforeEach(() => {
      Auth.login(users)
    })

    it('Verify that a user is able to see the amount of items in the cart', () => {
      Product.addItemToCart(0)
      cy.get(Cart.cartBackBtn).should('be.visible')

      cy.get(Cart.cartBackBtn).click()
      cy.get(Product.backToProductsBtn).click()

      Product.addItemToCart(1)

      cy.get(Cart.amountOfItemsIcon).should('have.text', ' 2 ')
    })

    it('Verify that a user can see the all items added in the cart', () => {
      Product.addItemToCart(0)
      cy.get(Cart.cartBackBtn).should('be.visible')

      cy.get(Cart.cartBackBtn).click()
      cy.get(Product.backToProductsBtn).click()

      Product.addItemToCart(1)

      cy.get(Cart.itemInCartName).eq(0).should('have.text', products.products[1].name)
      cy.get(Cart.itemInCartDescription).eq(0).should('have.text', products.products[1].description)
      cy.get(Cart.itemInCartName).eq(1).should('have.text', products.products[0].name)
      cy.get(Cart.itemInCartDescription).eq(1).should('have.text', products.products[0].description)
    })

    it('Verify that a user can see the all items added in the cart', () => {
      Product.addItemToCart(0)
      
      Cart.deleteFirstItemInCart()
      cy.get(Cart.emptyCartTitle).contains(' Your cart is empty. ')
    })

    it('Verify that a user can click the checkout CTA in the cart to be redirected to the checkout form', () => {
      Product.addItemToCart(0)

      cy.get(Cart.cartCheckoutBtn).click()
      cy.url().should('contain', '/checkout')
    })
})