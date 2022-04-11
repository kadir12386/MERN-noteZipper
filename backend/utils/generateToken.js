// gennerate the Token
import jwt from "jsonwebtoken";

const gennerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default gennerateToken;
