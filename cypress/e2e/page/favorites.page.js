import Product from "./product.page"
class Favorites {
    
    get favNavbarLink() { return ('#top-favorite') }
    get favNavbarLinkText() { return ('#top-favorite>.chakra-text') }
    get siteheadings() { return ('.chakra-heading.css-kmq9po')}
    get favPageItemRemove() { return ('#remove-favorite-btn') }

    get favAlertIcon() { return ('.chakra-alert__icon') }
    get favAlertCloseIcon() { return ('button[aria-label="Close"]') }
    get favAlertTitle() { return ('.chakra-alert__title') }

    get favoriteIcon(){ return('#add-to-favorite') }
    get favoriteIconRemove(){ return ('#remove-from-favorite') }

    addItemToFavorite(itemNum){
        cy.get(Product.getProductId(itemNum))
        .find(this.favoriteIcon)
        .should('be.visible')
        .click()
    }

    removeItemFromFavorite(itemNum){
        cy.get(Product.getProductId(itemNum))
        .find(this.favoriteIconRemove)
        .should('be.visible')
        .click()
    }
}
export default new Favorites()