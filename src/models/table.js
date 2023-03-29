const mongoose=require("mongoose")

const tableSchema= new mongoose.Schema
  ({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:Date
  } ,
  score:Number 
});

//module.exports = mongoose.model("Student", studentSchema)
module.exports=mongoose.model("table",tableSchema)