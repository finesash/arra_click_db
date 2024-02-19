const jwt = require("jsonwebtoken");

 module.exports = function (req, res, next) {
   const token = req.header("authorization");
   console.log("Received Token:", token); // Add this line for debugging
   if (!token)
     return res
       .status(401)
       .json({ error: "Access denied. No token provided." });

   try {
     const decoded = jwt.verify(token.split(" ")[1], process.env.SECRET);
     req.user = decoded;
     next();
   } catch (ex) {
     res.status(400).json({ error: "Invalid token." });
   }
 };