console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
}
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const submitBtn = document.getElementById("submitBtn")
const alertSpan = document.getElementById("alert-password")

firstName.addEventListener("change" , (e) => {
    const firstName = e.target.value
    details.firstName =  firstName
})
lastName.addEventListener("change" , (e) => {
    const lastname = e.target.value
    details.lastName = lastName
})
email.addEventListener("change" , (e) => {
    const email = e.target.value
    details.email = email
})
phoneNumber.addEventListener("change", (e) => {
    const phone = e.target.value;
    const phoneNumberRegex = /^(?:\+254|0|254)(7\d{8})$/; 
    if (phoneNumberRegex.test(phone)) {
        details.phoneNumber = phone;
        console.log("The phone number is Valid. Thanks!");
    } else {
        alert("The phone number entered is not a Kenyan number, kindly enter a valid phone number");
        e.target.value = ""; 
    }
});

password.addEventListener("change" , (e) => {
    const password = e.target.value
    details.password = password
})
confirmPassword.addEventListener("change" , (e) => {
    const confirmPassword = e.target.value
    details.confirmPassword = confirmPassword


})
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

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^(?:\+254|0|254)(7\d{8})$/;
    return phoneRegex.test(phoneNumber);
}

function validateEmail (Email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(Email)
}

submitBtn.addEventListener("click", (e) => {
    const {firstName, lastName, email, phoneNumber, password, confirmPassword, agreeTerms} = details

    
    const isValidated = validatePassword(password,confirmPassword)
    const isNameValidated = validateNames(firstName, lastName)
    const isEmailValidated = validateEmail(email)
    const isPhoneNumberValidated = validatePhoneNumber(phoneNumber)
    console.log(isNameValidated, isEmailValidated, isPhoneNumberValidated,isValidated)
    
    if(isValidated && isNameValidated && isEmailValidated && isPhoneNumberValidated) {
        window.location.href = "./dashboard.html"

    } else {
        alertSpan.classList.remove("alert-off-message")
        alertSpan.classList.remove("alert-on-message")
    }

    // console.log("Your for has been submitted successfully!");
});

// alertSpan.classList.remove("alert-off-message")