const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  //check json web token exists and is verified
  if (token) {
    jwt.verify(token, "Bipin secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/api/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/api/login");
  }
};

module.exports = { requireAuth };
