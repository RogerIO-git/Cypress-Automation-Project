class Cart {

    get cartTitle() { return ('.snipcart-cart__secondary-header') }
    get cartCheckoutBtn() { return ('button.snipcart-button-primary') }
    get cartBackBtn() { return ('.snipcart-cart-header__close-button ') }
    get cartItems() { return ('ul.snipcart-item-list') }

    get itemInCartName() { return ('h2.snipcart-item-line__title') }
    get cartRemoveItem() { return ('button[aria-label="Remove item"]') }
    get quantityInCart() { return ('.snipcart-item-quantity__quantity > .snipcart__font--secondary') }
    get cartTotal() { return ('.snipcart-summary-fees__amount') }
    
}
export default new Cart()