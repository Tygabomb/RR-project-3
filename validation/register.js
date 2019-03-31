const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.userEmail = !isEmpty(data.userEmail) ? data.userEmail : "";
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.userPassword = !isEmpty(data.userPassword) ? data.userPassword : "";
  data.userPassword2 = !isEmpty(data.userPassword2) ? data.userPassword2 : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }

  if (Validator.isEmpty(data.userEmail)) {
    errors.userEmail = "Email field is required";
  } else if (!Validator.isEmail(data.userEmail)) {
    errors.userEmail = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.userPassword)) {
    errors.userPassword = "Password field is required";
  }
if (Validator.isEmpty(data.userPassword2)) {
    errors.userPassword2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.userPassword, { min: 6, max: 30 })) {
    errors.userPassword = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.userPassword, data.userPassword2)) {
    errors.userPassword2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};