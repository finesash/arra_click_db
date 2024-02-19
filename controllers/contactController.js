const Contact = require("../models/contactModel")


const getContact = async(req,res)=>{
    try {
        const {id} = req.params;
        const contact = await Contact.findById(id);
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getContacts = async(req,res)=>{
    try {
        const contact = await Contact.find();
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createContact = async(req,res)=>{
    try {
        const contact = await Contact.create(req.body);
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    getContact,
    getContacts,
    createContact
}