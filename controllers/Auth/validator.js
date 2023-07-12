module.exports = {
  loginValidator: {
    email: "required|email",
    password: "required",
  },
  registerValidator: {
    email: "required|email",
    password: "required",
    fullname: "required",
    phoneNumber: "required|phoneNumber",
  },
};
