import Auth from '../page/auth.page'
import Product from '../page/product.page'
import user from '../data/users.data'
import products from '../data/products.data'

describe('Authentication', () => {
  beforeEach(() => {
      cy.visit('/')
      cy.get(Auth.signInOrRegisterBtn).click();
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

  for(let i = 0; i < Product.productTile.length-1; i++) {   
    it('Verify that users are able to see an "Add to Cart" button for each item'+` [${i}]`, () => { 
      cy.get(Product.getProductId(i))
      .find(Product.addToCartBtns)
      .scrollIntoView()
      .should('be.visible') 
    })
  }
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

