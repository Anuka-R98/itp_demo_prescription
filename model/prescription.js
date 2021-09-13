const mongoose = require("mongoose");


const prescriptionSchema = new mongoose.Schema({ //define schema 
  cusID: {
    type: String,
    required: true //backend validation
  },
  name: {  
    type: String,
    required: true
  },
  pNum:  {
    type: String,
    required: true
  },
  presImage:  {
    type: String,
    required: true
  },
  presImage2:  {
    type: String,
    required: true,
    timestamps: true 
  },
  postDate:  {
    type: Date,
    default: Date.now
  },

});

const Prescription  = mongoose.model('Prescription', prescriptionSchema); //schema to model 

module.exports = Prescription; //export model 
