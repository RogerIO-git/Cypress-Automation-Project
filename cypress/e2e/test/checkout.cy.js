import Auth from '../page/auth.page'
import Product from '../page/product.page'
import Cart from '../page/cart.page'
import Checkout from '../page/checkout.page'
import users from '../data/users.auth.data'
import paymentInfo from '../data/users.checkout.data'
describe('Checkout', () => {
    beforeEach(() => {
        Auth.login(users)
        Product.addItemToCart(0)

        cy.get(Cart.cartCheckoutBtn).should('be.visible').click({force: true})
    })
    for(let i of paymentInfo){
        if(!(i.valid)){
            it(`Verify that the ${i.missingField} field is required to continue to payment`, () => {
                Checkout.fillCheckoutInfoForm(
                    i.full_name,
                    i.email,
                    i.streetAddress,
                    i.city,
                    i.country,
                    i.state,
                    i.zipcode
                )
                cy.get(Checkout.checkoutContinueToPaymentBtn).click({force: true})
                cy.get(Checkout.checkoutInfoErrorHint).contains(i.errorHint)
            })
        }
        if(i.valid){
            it(`Verify that the user is able to continue to payment`, () => {
                Checkout.fillCheckoutInfoForm(
                    i.full_name,
                    i.email,
                    i.streetAddress,
                    i.city,
                    i.country,
                    i.state,
                    i.zipcode
                )
                cy.get(Checkout.checkoutContinueToPaymentBtn).click({force: true})

                Checkout.fillCheckoutPaymentForm(
                    i.card,
                    i.cardDate,
                    i.cvv  
                )
                cy.get(Checkout.checkoutContinueToPaymentBtn).click({force: true})
                cy.url().should('contain', 'order')
            })
        }
    }

    it(`Verify that the user is able to see the summary of their order`, () => {
        const i = paymentInfo[0]
        Checkout.fillCheckoutInfoForm(
            i.full_name,
            i.email,
            i.streetAddress,
            i.city,
            i.country,
            i.state,
            i.zipcode
        )
        cy.get(Checkout.checkoutContinueToPaymentBtn).click({force: true})

        Checkout.fillCheckoutPaymentForm(
            i.card,
            i.cardDate,
            i.cvv  
        )
        cy.get(Checkout.checkoutContinueToPaymentBtn).click({force: true})

        cy.get(Checkout.checkoutSummaryItemName, {timeout: 3000}).should('exist')
    })
    
})