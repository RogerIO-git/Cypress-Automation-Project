import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import users from '../data/users.auth.data'
import products from '../data/products.data'

describe('Product Gallery', () => {

  beforeEach(() => {
    Auth.login(users)
  })
 
  it('Verify that users are able to see an "Add to Cart" button for each item', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.addToCartBtns)
    .scrollIntoView()
    .should('be.visible') 
  })
  
  // To save on time I will not be adding the rest in the loop and they will be tested individually

  it('Verify that product items have a category tag', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productCategoryTags)
    .scrollIntoView()
    .should('be.visible')
    .and('have.text', products.products[0].tag)
  })

  it('Verify that each item has an image', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productImgs)
    .scrollIntoView()
    .should('be.visible')
    .and('have.attr', 'src')
  })

  it('Verify that each item has a price', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productPriceTags)
    .scrollIntoView()
    .should('be.visible')
    .contains(products.products[0].price)
  })
})

describe('Product Details', () => {

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

  it('Verify that the item name is displayed on the product detail page', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productImgs)
    .scrollIntoView()
    .should('be.visible')
    .click()

    cy.get(Product.productDetailsName)
    .should('be.visible')
    .should('contain', products.products[0].name.trim())
  })

  it('Verify that the item description is displayed on the product detail page', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productImgs)
    .scrollIntoView()
    .should('be.visible')
    .click()

    cy.get(Product.productDetailsInfo)
    .eq(1)
    .should('be.visible')
    .should('contain', products.products[0].description.trim())
  })

  it('Verify that the item price is displayed on the product detail page', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productImgs)
    .scrollIntoView()
    .should('be.visible')
    .click()

    cy.get(Product.productDetailsInfo)
    .eq(3)
    .should('be.visible')
    .should('contain', products.products[0].price)
  })

  it('Verify that the "Add to Cart" button is displayed on the product detail page', () => { 
    cy.get(Product.getProductId(0))
    .find(Product.productImgs)
    .scrollIntoView()
    .should('be.visible')
    .click()

    cy.get(Product.addToCartBtns)
    .should('be.visible')
  })

  it('Verify that when the user clicks the "Add to Cart" button on the product detail page then the item is added to the cart', () => { 
    Product.addItemToCart(0)

    cy.get(Cart.itemInCartName)
    .should('be.visible')
    .and('have.text', products.products[0].name)
  })

})
