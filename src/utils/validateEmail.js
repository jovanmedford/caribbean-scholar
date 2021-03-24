/**
 * Checks if the email entered is in the correct format
 * @param {String} email The email field from the form
 * @returns {Boolean} true
 */

export default function validateEmail(email) {
    console.log('Validate Email')
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!email.match(emailFormat)) {
        return 'Invalid Email'
    }
    return '';
}

