import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import products from '../data/products.data'
import user from '../data/users.data'
describe('Add-to-cart', () => {
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
      cy.get(Product.getProductId(0))
      .find(Product.productImgs)
      .should('be.visible')
      .click()

      cy.get(Product.backToProductsBtn).should('be.visible')
      cy.get(Product.addToCartBtns).click()
      cy.get(Cart.cartCheckoutBtn).should('be.visible')

      cy.get(Cart.itemInCartName).eq(0).should('have.text', products.products[0].name)

    })

    it('Verify that a user can add multiple items to cart', () => {
      cy.get(Product.getProductId(0))
      .find(Product.productImgs)
      .should('be.visible')
      .click()

      cy.get(Product.backToProductsBtn).should('be.visible')
      cy.get(Product.addToCartBtns).click()
      cy.get(Cart.cartCheckoutBtn).should('be.visible')

      cy.get(Cart.cartBackBtn).click()
      cy.get(Product.backToProductsBtn).click()

      cy.get(Product.getProductId(1))
      .find(Product.productImgs)
      .should('be.visible')
      .click()

      cy.get(Product.backToProductsBtn).should('be.visible')
      cy.get(Product.addToCartBtns).click()

      cy.get(Cart.itemInCartName).eq(0).should('have.text', products.products[1].name)
      cy.get(Cart.itemInCartName).eq(1).should('have.text', products.products[0].name)
      
    })

    it('Verify that a user is able to change the amount of an item they can add to cart', () => {
      cy.get(Product.getProductId(0))
      .find(Product.productImgs)
      .should('be.visible')
      .click()

      cy.get(Product.backToProductsBtn).should('be.visible')
      cy.get(Product.increaseProductAmountBtn).click()
      cy.get(Product.increaseProductAmountBtn).click()
      cy.get(Product.addToCartBtns).click()

      cy.get(Cart.quantityInCart).should('have.text', '3')

    })
    
    it('Verify that the total in the cart updates with each item added', () => {
      cy.get(Product.getProductId(0))
      .find(Product.productImgs)
      .should('be.visible')
      .click()

      cy.get(Product.backToProductsBtn).should('be.visible')
      cy.get(Product.addToCartBtns).click()
      cy.get(Cart.cartCheckoutBtn).should('be.visible')

      cy.get(Cart.cartBackBtn).click()
      cy.get(Product.addToCartBtns).click()

      cy.get(Cart.cartTotal)
      .should('be.visible')
      .contains(`${products.products[0].price+products.products[0].price}`)
    })
})

