const Email = require("../models/emailModel");

const getAllMails = async(req,res)=>{
    try {
        const email = await Email.find();
        res.status(200).json(email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}