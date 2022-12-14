module.exports = [
    {
        valid: true,
        full_name: 'Test User',
        email: 'testing1@testmail.com',
        streetAddress:'2 test street',
        city: 'Test City',
        country:'Jamaica',
        state: 'New York',
        zipcode: '10001',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!',
        errorHint: 'This field is required',
        missingField: ' '
    },
    {
        valid: false,
        full_name: 'Test User',
        email: ' ',
        streetAddress:'2 test street',
        city: 'Test City',
        country:'Jamaica',
        state: 'New York',
        zipcode: '10001',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!',
        errorHint: 'This field is required',
        missingField: 'email'
    },
    {
        valid: false,
        full_name: 'Test User',
        email: 'testing1@testmail.com',
        streetAddress:'2 test street',
        city: ' ',
        country:'Jamaica',
        state: 'New York',
        zipcode: '10001',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!',
        errorHint: 'This field is required',
        missingField: 'city'
    },
    {
        valid: false,
        full_name: 'Test User',
        email: 'testing1@testmail.com',
        streetAddress:'2 test street',
        city: 'Test City',
        country:' ',
        state: 'New York',
        zipcode: '10001',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!',
        errorHint: 'This field is required',
        missingField: 'country'
    },
    {
        valid: false,
        full_name: 'Test User',
        email: 'testing1@testmail.com',
        streetAddress:'2 test street',
        city: 'Test City',
        country:'Jamaica',
        state: 'New York',
        zipcode: ' ',
        card: '4242 4242 4242 4242',
        cvv:'123',
        cardDate:'12/30',
        shipment: 'FREE PONY EXPRESS DELIVERY!',
        errorHint: 'This field is required',
        missingField: 'zipcode'
    },
]