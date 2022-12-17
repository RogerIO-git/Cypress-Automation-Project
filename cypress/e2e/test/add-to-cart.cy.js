import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import products from '../data/products.data'
import users from '../data/users.auth.data'
describe('Add-to-cart', () => {
    beforeEach(() => {
        Auth.login(users)
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

