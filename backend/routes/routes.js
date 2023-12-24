const express = require("express");
const { userLogin, userSignUp } = require("../controllers/userLogin");
const authJWT = require("../middlewares/authJWT");
const handleRoles = require("../controllers/handleRoles");
const router = express.Router();
router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.post("/add-role",handleRoles)
router.use(authJWT)

module.exports = router;
