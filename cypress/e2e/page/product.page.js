class Products {

    //Product gallery page element gettters
    get productImgs() { return ('.chakra-aspect-ratio>img') }
    get addToCartBtns() { return ('#add-to-cart') }
    get productCategoryTags() { return ('.css-1ccau2i') }
    get productPriceTags() { return ('.chakra-stack>.chakra-text.css-0') }
    get productTile() { return ('.chakra-stack.css-uaqjf') }
    get productName() { return ('.chakra-text.css-1n64n71') }
    get productSort() { return ('#sort') }
    get productFilter() { return ('#category') }
    get productResetFilter() { return ('#reset') }

    //Product detail page element gettters
    get backToProductsBtn() { return ('.chakra-heading.css-18j379d') }
    get increaseProductAmountBtn() { return ('#product-increase') }
    get decreaseProductAmountBtn() { return ('#product-decrease') }
    get productDetailsName() { return ('.css-84zodg>h2.css-1dklj6k') }
    get productDetailsInfo() { return ('p.css-0') }

    get navbarCart() { return ('#top-cart') }
    
    getProductId(num) { 
        let productId = `#product-${num}`
        return productId
    }  

    addItemToCart(itemNum){
        cy.get(this.getProductId(itemNum))
        .find(this.productImgs)
        .should('be.visible')
        .click()

        cy.get(this.backToProductsBtn, {timeout: 3000}).should('be.visible')
        cy.get(this.addToCartBtns).scrollIntoView().trigger('click')
    }

    selectFilter(filter){
        cy.get(this.productSort).select(filter)

    }

    selectCategory(category){
        cy.get(this.productFilter).select(category)
    }
}
export default new Products()