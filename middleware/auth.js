const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "The request has no authorization header" });
    }

    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).send({ status: "error", data: "Failed to authenticate user" });
        }

        req.decodedUser = decoded;
        next();
      });
    }
  } catch (error) {}
};
