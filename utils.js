function validatePassword(password, confirmPassword) {
    if (password === confirmPassword && password.length >= 4 && password !== "" && password.length !== 0 && password.trim() !== 0 && /\d/.test(password) && /[a-zA-Z]/.test(password))
       {
        // alert("Passwords match.");
        return true;
    }

    else {
        // alert("Passwords do not match. Please re-enter.");
        return false;
    }
}

function validateNames(firstName, lastName){
    if (firstName.length <= 4 && lastName.length <= 4 ){
        return false
    } else {
        return true
    }
    //Using Tests,validate that the first name and last name are not less than 4 characters

}

function validatePhoneNumber(phoneNumber){
    const phoneRegex = /^(?:\+254|0|254)([127]\d{8})$/;
    return phoneRegex.test(phoneNumber);

}

function validateEmail (email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)


}



module.exports = {
    validatePassword,
    validateNames,
    validatePhoneNumber,
    validateEmail

}
