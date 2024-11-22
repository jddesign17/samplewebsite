const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    student_id:String,
    first_name:String,
    last_name:String,
    age:Number,
    person_image:String
})


 const studentModel = mongoose.model("student",studentSchema)

 module.exports = studentModel
