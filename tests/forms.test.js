const validatePassword = require("../validatePassword")

test("validate password works as expected", () => {
    expect(validatePassword("s", "S")).toBe(false)
    expect(validatePassword("S", "S")).toBe(true)
    // expect(validatePassword("password123", "password1234")).toBe(false)
    // expect(validatePassword("", "")).toBe(false)

})