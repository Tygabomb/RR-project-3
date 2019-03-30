const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};

  data.userEmail = !isEmpty(data.userEmail) ? data.userEmail : "";
  data.userPassword = !isEmpty(data.userPpassword) ? data.userPassword : "";

  if (Validator.isEmpty(data.email)) {
    errors.userEmail = "Email field is required";
  } else if (!Validator.isEmail(data.userEmail)) {
    errors.userEmail = "Email is invalid";
  }

  if (Validator.isEmpty(data.userPassword)) {
    errors.userPassword = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};