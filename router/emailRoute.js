const express = require('express');
const router =express.Router();
const {getAllMails,getSingleMail,createEmail} =require("../controllers/emailController");

router.get("/",getAllMails);
router.get("/:id",getSingleMail);
router.post("/",createEmail);

module.exports=router