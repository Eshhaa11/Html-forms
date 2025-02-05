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
phoneNumber.addEventListener("change" , (e) => {
    const phoneNumber = e.target.value
    details.phoneNumber = e.target.value
})
password.addEventListener("change" , (e) => {
    const password = e.target.value
    details.password = e.target.value
})
confirmPassword.addEventListener("change" , (e) => {
    const confirmPassword = e.target.value
    details.confirmPassword = e.target.value

//using regular expression, validate if the number is a valid kenyan number
//if its not, using the alert function, notify the user that the number is not valid
})

//Add event listenenrs for all remaining input elements and update the details object

function validatePassword(str1, str2) {
    //confirm password and confirm password are the same
    //return a boolean if the password match
}
submitBtn.addEventListener("click", (e) => {
    let {firstName, lastName, email, phoneNumber, password, confirmpassword, agreeTerms} = details
    console.log(firstName, lastName, email, phoneNumber, password, confirmpassword, agreeTerms)
})