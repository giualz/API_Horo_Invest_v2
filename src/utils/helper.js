const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY: secret_key, JWT_EXPIRESIN: expiresIn } = process.env;
console.log("expiresIn", expiresIn);

exports.generateHash = async (password) => {
  const passEncode = await bcrypt.genSaltSync(10, "a");
  return bcrypt.hashSync(password, passEncode);
};

exports.generateToken = (payload) => {
  return {
    type: "bearer",
    token: jwt.sign({ ...payload }, secret_key, {
      expiresIn: parseInt(expiresIn),
    }),
  };
};