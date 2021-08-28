export default function validateRegisterData({
  login,
  email,
  password,
  cfPassword,
}) {
  const errors = {};
  errors.login = !login
    ? "Username is required"
    : login.length < 4
    ? "Username must be at least 4 characcters long"
    : "";

  errors.email = !email ? "Email is required" : !isEmailValid(email) ? "Invalid email" : '';

  errors.password = !password
    ? "Password is required"
    : password.length < 6
    ? "Pasword must be at least 6 characcters long"
    : "";
  errors.cfPassword =
    password !== cfPassword ? "Password and confirm do not match" : "";
  return errors;
}

function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}