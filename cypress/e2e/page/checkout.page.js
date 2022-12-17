class Checkout {

    get checkoutNameField() { return ('input[name="name"]') }
    get checkoutEmailField() { return ('input[name="email"]') }
    get checkoutAddressField() { return ('.snipcart-form__address-autocomplete>.snipcart-form__select') }
    // get checkoutAddressField2() { return ('.snipcart-typeahead__select') }
    get checkoutAddressField2() { return ('.snipcart-form__select-wrapper>.snipcart-form__select') }
    get checkoutCityField() { return ('input[name="city"]') }
    get checkoutDropdownField() { return ('.snipcart-form__select') }
    get checkoutProvinceField() { return ('input[name="province"]') }
    get checkoutZipCodeField() { return ('input[name="postalCode"]') }
    get checkoutContinueToPaymentBtn() { return ('button[type="submit"]') }
    get checkoutInfoErrorHint() { return ('.snipcart-field-error') }

    get checkoutPaymentFrame() { return ('.snipcart-payment-card-form>iframe') }
    get checkoutCardNumber() { return ('#card-number') }
    get checkoutCardExpiryDate() { return ('#expiry-date') }
    get checkoutCardCvv() { return ('#cvv') }

    get checkoutSummaryTitles() { return ('h1.snipcart__font--subtitle') }
    get checkoutSummaryItemName() { return ('.snipcart-cart-summary-expanded-item__name') }

    countryDropdown() {
        return cy.get(this.checkoutDropdownField).eq(2)
    }

    cityDropdown() {
        return cy.get(this.checkoutDropdownField).eq(1)
    }

    checkoutPurchaseSummary() {
        return cy.get(this.checkoutSummaryTitles).eq(1)
    }

    fillCheckoutInfoForm(
        full_name,
        email,
        streetAddress,
        city,
        country,
        state,
        zipcode,
    ){
        cy.get(this.checkoutNameField).type(full_name)
        cy.get(this.checkoutEmailField).type(email)
        this.cityDropdown().type(streetAddress)
        // cy.get(this.checkoutAddressField).click()
        // cy.get(this.checkoutAddressField2).type(streetAddress)
        cy.get(this.checkoutCityField).type(city)
        if(country !== ' ' ){
            this.countryDropdown().select(country)
        }
        cy.get(this.checkoutProvinceField).type(state)
        cy.get(this.checkoutZipCodeField).type(zipcode)
    }

    fillCheckoutPaymentForm(
        cardNum,
        expirationDate,
        cvv
    ){
        cy.iframe(this.checkoutPaymentFrame).find(this.checkoutCardNumber).type(cardNum)
        cy.iframe(this.checkoutPaymentFrame).find(this.checkoutCardExpiryDate).type(expirationDate)
        cy.iframe(this.checkoutPaymentFrame).find(this.checkoutCardCvv).type(cvv)
    }


    
}
export default new Checkout()