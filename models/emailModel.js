const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emails = new Schema ({
    email:{
        type:String,
        required:true
    }
})  

const Email = mongoose.model("Email",emails)
module.exports=Email