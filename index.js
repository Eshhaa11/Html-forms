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

firstName.addEventListener("change" , (e) => {
    const name = e.target.value
    details.firstName =  name
})
lastName.addEventListener("change" , (e) => {
    const name = e.target.value
    details.lastName = e.target.value
})
email.addEventListener("change" , (e) => {
    const email = e.target.value
    details.email = e.target.value
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
    details.password = e.target.value
})
confirmPassword.addEventListener("change" , (e) => {
    const confirmPassword = e.target.value
    details.confirmPassword = e.target.value


})

function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) 
        return true;
    else {
        alert("Passwords do not match. Please re-enter.");
        return false;
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(details)
    let {firstName, lastName, email, phoneNumber, password, confirmPassword, agreeTerms} = details
    console.log(firstName, lastName, email, phoneNumber, password, confirmPassword, agreeTerms)

    if (!validatePassword(password, confirmPassword)) {
        return; 
    }

    console.log("Your for has been submitted successfully!");
});