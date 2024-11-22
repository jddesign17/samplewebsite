const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    class_hours:Number,
    age:Number,
    subject:String,
    teacher_id:String
})


const TeacherModel = mongoose.model("teacher",teacherSchema)
module.exports = TeacherModel