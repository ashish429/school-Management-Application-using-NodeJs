const mongoose=require("mongoose")

const tableSchema= new mongoose.Schema(
    {
         rollNo: { type: Number , required : true, unique:true },
         name:{type: String , require : true},
         dob:{type: Date , require : true},
         score:{type: Number , require : true, default:0}
    }
)

module.exports=mongoose.model("table",tableSchema)