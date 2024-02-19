const express = require("express");
const router = express.Router();
const {getContact,getContacts,createContact} = require("../controllers/contactController")

router.get("/",getContacts);
router.get("/:id",getContact);
router.post("/",createContact)


module.exports=router