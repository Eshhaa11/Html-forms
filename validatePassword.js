function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        // alert("Passwords match.");
        return true;
    }

    else {
        // alert("Passwords do not match. Please re-enter.");
        return false;
    }
}


module.exports = validatePassword