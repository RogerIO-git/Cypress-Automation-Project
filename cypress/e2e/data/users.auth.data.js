module.exports = [
    {
        authType: 'login',
        valid: true,
        userType: 'valid user',
        email: 'testing1@testmail.com',
        password: 'Password123',
        url: '/products',
    },
    {
        authType: 'login',
        vaid: false,
        userType: 'invalid email user',
        email: 'testing1@testmail.com',
        password: 'P',
        errorMsgAlert: 'Wrong email or password.',
    },
    {
        authType: 'signUp',
        valid: false,
        userType: 'already registered user',
        email: 'testing1@testmail.com',
        password: 'Password123',
        errorMsgAlert: "We're sorry, something went wrong when attempting to sign up.",
    },
    {
        authType: 'signUp',
        valid: true,
        userType: 'valid user',
        email: '',
        password: 'Password123',
        url: '/products',
    },
]
// {
//     valid: {
//         email: 'testing1@testmail.com',
//         password: 'Password123',
//         full_name: 'Test User',
//         streetAddress:'2 test street',
//         city: 'Test City',
//         country:'United States',
//         state: 'New York',
//         zipcode: '10001',
//         card: '4242 4242 4242 4242',
//         cvv:'123',
//         cardDate:'12/30',
//         shipment: 'FREE PONY EXPRESS DELIVERY!'
//     },
//     invalid: {
//         email:'i',
//         password: 'P',
//         loginErrorMsgAlert: 'Wrong email or password.',
//         signupErrorMsgAlert:"We're sorry, something went wrong when attempting to sign up.",
//         errorWarningHint: 'Email is invalid',
//     },
// }