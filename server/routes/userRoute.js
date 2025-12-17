const express = require("express");
const {userLogin,createUser,updatePassword,deleteUser,sendOTP,verifyOTP} = require("../controllers/userController.js");
const {isUser} = require("../middlewares/isAuth.js")

const router = express.Router();

router.post("/create",createUser);
router.post("/login",userLogin);
router.post("/sendotp",sendOTP);
router.post("/verifyotp",verifyOTP);
router.put("/updatepassword",updatePassword);
router.delete("/delete",isUser,deleteUser);

module.exports = router;