const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const interested_in_schema = new Schema({
    value:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const contacts = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interested_in: interested_in_schema,
});


const Contact = mongoose.model("Contact",contacts)
module.exports=Contact; 