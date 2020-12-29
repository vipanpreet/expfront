export default function validateRegsiter(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Firstname required";
  } else if (!/^[A-Za-z]+/.test(values.firstName)) {
    errors.firstName = "Enter a valid firstname";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "lastname required";
  } else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
    errors.lastName = "Enter a valid lastname";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
