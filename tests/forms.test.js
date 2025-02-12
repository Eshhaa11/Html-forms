const {validatePassword, validateNames, validatephoneNumber} = require("../utils")

test("validate password works as expected", () => {
    expect(validatePassword("s", "S")).toBe(false)
    expect(validatePassword("S", "S")).toBe(false)
    expect(validatePassword("SSSSSSS", "SSSSSSS")).toBe(false)
    expect(validatePassword("password123", "password1234")).toBe(false)
    expect(validatePassword("", "")).toBe(false)
    expect(validatePassword("Password1234", "password1234")).toBe(false)
    expect(validatePassword("password123", "")).toBe(false)
    expect(validatePassword("", "password1234")).toBe(false)
    expect(validatePassword("     ", "    ")).toBe(false)
    expect(validatePassword("     ", "password1234")).toBe(false)
    expect(validatePassword("password123", "password1234")).toBe(false)
    expect(validatePassword("StrongPass1", "StrongPass1")).toBe(true); 
    expect(validatePassword("NoNumbersHere", "NoNumbersHere")).toBe(false); 
    expect(validatePassword("12345678", "12345678")).toBe(false); 
    expect(validatePassword("Aa1Bb2Cc3", "Aa1Bb2Cc3")).toBe(true);



})

test("it validates that the first name and last name are more than 4 characters", () => {
    expect(validateNames("es", "ha")).toBe(false)
    expect(validateNames("Eshaa", "Patel")).toBe(true)

})

test("validate phoneNumber works as expected" , () => {
    expect(validatephoneNumber("+254712345678")).toBe(true);
    expect(validatePhoneNumber("0")).toBe(false);
    expect(validatePhoneNumber("phoneNumber")).toBe(false);
    expect(validatePhoneNumber("2348509274626233")).toBe(false); 
    expect(validatePhoneNumber("+254812345678")).toBe(false);



})