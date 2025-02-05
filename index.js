console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
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
})
submitBtn.addEventListener("click", (e) => {
    console.log(details)
})


