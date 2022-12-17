class Cart {

    get cartTitle() { return ('.snipcart-cart__secondary-header') }
    get cartCheckoutBtn() { return ('button.snipcart-button-primary') }
    get cartBackBtn() { return ('.snipcart-cart-header__close-button ') }
    get cartItems() { return ('ul.snipcart-item-list') }

    get itemInCartName() { return ('h2.snipcart-item-line__title') }
    get itemInCartDescription() { return ('.snipcart-item-description') }
    get cartRemoveItem() { return ('.snipcart-button-icon.is-danger>.snipcart__icon') }
    get quantityInCart() { return ('.snipcart-item-quantity__quantity > .snipcart__font--secondary') }
    get cartTotal() { return ('.snipcart-summary-fees__amount') }

    get amountOfItemsIcon() { return ('.snipcart-cart-header__option') }
    get emptyCartTitle() { return ('.snipcart-empty-cart__title') }

    get decreaseInCartBtn() { return ('button[aria-label="Decrement quantity"]') }
    
    decrementFirstItemInCart() { 
        cy.get(this.decreaseInCartBtn)
        .eq(0)
        .should('be.visible')
        .click()
    }
}
export default new Cart()