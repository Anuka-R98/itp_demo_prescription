const mongoose = require("mongoose");


const validPrescriptionSchema = new mongoose.Schema({ //define schema 
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

const validPrescription = mongoose.model('validPrescription', validPrescriptionSchema); //schema to model 

module.exports = validPrescription; //export model 
