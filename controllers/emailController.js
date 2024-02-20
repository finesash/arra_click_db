const Email = require("../models/emailModel");

const getAllMails = async(req,res)=>{
    try {
        const email = await Email.find();
        res.status(200).json(email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getSingleMail = async(req,res)=>{
    try {
        const {id}=req.params;
        const email = await Email.findById(id)
        res.status(200).json(email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createEmail = async(req,res)=>{
    try {
        const email = await Email.create(req.body);
        res.status(200).json(email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {getAllMails,getSingleMail,createEmail}