/**
 * Checks if the name entered is in the correct format
 * @param {String} name The name field from the form
 * @returns {Boolean} true
 */

 export default function validateName(name) {
    console.log('Validate Name')
    let nameArray = name.split(' ');
    if(nameArray.length !== 2) {
        return 'Enter Your First and Last Name';
    } 
    return '';
}

