const User = require("../models/users");
const jwt = require("jsonwebtoken");

// Handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "", name: "", contact_no: "" };

  if (err.code === 11000) {
    errors.email = "That email already has an account";
    return errors;
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "Bipin secret", {
    expiresIn: maxAge,
  });
};

module.exports.register_get = async (req, res) => {
  res.render("register");
};

module.exports.login_get = async (req, res) => {
  res.render("login");
};

module.exports.register_post = async (req, res) => {
  const { email, password, name, contact_no } = req.body;

  try {
    const user = await User.create({ email, password, name, contact_no });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
    res.status(201).send("User Created");
    return;
  } catch (err) {
    const errors = handleErrors(err);
    res.status(401).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  res.send("login");
};

module.exports.logout = async (req, res) => {
  res.render("logout");
};
