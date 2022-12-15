class Products {

    get productImgs() { return ('.chakra-aspect-ratio>img') }
    get addToCartBtns() { return ('#add-to-cart') }
    get productCategoryTags() { return ('.css-1ccau2i') }
    get productPriceTags() { return ('.chakra-text.css-0') }
    get productTile() { return ('.chakra-stack.css-uaqjf') }
    get productName() { return ('.chakra-text.css-1n64n71') }

    get backToProductsBtn() { return ('.chakra-heading.css-18j379d') }
    get increaseProductAmountBtn() { return ('#product-increase') }
    get decreaseProductAmountBtn() { return ('#product-decrease') }
    

    getProductId(num) { 
        let productId = `#product-${num}`
        return productId
    }





    
}
export default new Products()