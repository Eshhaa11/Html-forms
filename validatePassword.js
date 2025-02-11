function validatePassword(password, confirmPassword) {
    if (password === confirmPassword && 
        password.length >= 4 && 
        password !== "" && 
        password.length !== 0 && 
        password.trim() !== 0) {
        // alert("Passwords match.");
        return true;
    }

    else {
        // alert("Passwords do not match. Please re-enter.");
        return false;
    }
}


module.exports = validatePassword