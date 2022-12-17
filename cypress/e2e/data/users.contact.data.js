module.exports = [
    {
        valid: true,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: ''
    },
    {
        valid: false,
        first_name: '',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: 'first name',
        error: 'Field is required!'
    },
    {
        valid: false,
        first_name: 'John',
        last_name: '',
        email: 'john.doe@example.com',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: 'last name',
        error: 'Field is required!'
    },
    {
        valid: false,
        first_name: 'John',
        last_name: 'Doe',
        email: '',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: 'email',
        error: 'Field is required!'
    },
    {
        valid: false,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        subject: '',
        message: 'Hello John Doe',
        missingField: 'subject',
        error: 'Field is required!'
    },
    {
        valid: false,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        subject: 'Hello',
        message: '',
        missingField: 'message',
        error: 'Field is required!'
    },
    
]