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

    it('Verify that a user is able to sort items on the product page from A to Z', () => { 
        Product.selectFilter(products.filter['A to Z'])
        cy.wait(500)
        products.products.sort((a, b)=>{
            if(a.name.trim()>b.name.trim()){
                return 1
            }else{
                return -1
            }
        })

        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

    it('Verify that a user is able to sort items on the product page from Z to A', () => {
        Product.selectFilter(products.filter['Z to A'])
        cy.wait(500)
        // products.products.sort().reverse()
        products.products.sort((a, b)=>{
            if(a.name.trim()>b.name.trim()){
                return 1
            }else{
                return -1
            }
        }).reverse()

        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

    it('Verify that a user is able to sort items on the product page from low to high', () => {
        Product.selectFilter(products.filter['Low to High'])
        cy.wait(500)
        products.products.sort((a, b) => a.price - b.price)

        cy.get(Product.productPriceTags).each(($elem, index) => {
            
            expect($elem.text()).equal(`$${products.products[index].price}`)
        })
    })

    it('Verify that a user is able to sort items on the product page from High to Low', () => {
        Product.selectFilter(products.filter['High to Low'])
        cy.wait(500)
        products.products.sort((a, b) => b.price - a.price)

        cy.get(Product.productPriceTags).each(($elem, index) => {
            
            expect($elem.text()).equal(`$${products.products[index].price}`)
        })
    })

    // it('Verify that a user is able use reset filter button', () => {
    //     Product.selectFilter(products.filter['High to Low'])
    //     cy.wait(500)
    //     let defaultOrder = JSON.parse(JSON.stringify(products.products))
    //     products.products.sort((a, b) => b.price - a.price)

    //     cy.get(Product.productPriceTags).each(($elem, index) => {
            
    //         expect($elem.text()).equal(`$${products.products[index].price}`)
    //     })
     
    //     cy.get(Product.productResetFilter).click()
    //     console.log(defaultOrder)
    //     cy.get(Product.productName).each(($elem, index) => {
    //         expect($elem.text()).equal(defaultOrder[index].name.trim())
    //     })

    // })
})