module.exports = {
    valid: {
        email: 'testing1@testmail.com',
        password: 'Password123',
        full_name: 'Test User',
        streetAddress:'2 test street',
        city: 'Test City',
        country:'United States',
        state: 'New York',
        zipcode: '10001',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!'
    },
    invalid: {
        email:'i',
        password: 'P',
        loginErrorMsgAlert: 'Wrong email or password.',
        signupErrorMsgAlert:"We're sorry, something went wrong when attempting to sign up.",
        errorWarningHint: 'Email is invalid',
    },
}