const express = require("express")
const router = express.Router()
const StudentModel = require("../models/user");

router.post("/studentpost", async (req, res) => {
    const { student_id, first_name, last_name, age, person_image } = req.body;
  
    try {
      
      const student = new StudentModel({
          student_id,
          first_name,
          last_name,
          age,
          person_image
      })
  
      const savedData = await student.save();
      res.send(savedData);
    } catch (error) {}
  });
  
  
  router.get("/students",async(req,res)=>{
      try {
          const getData = await StudentModel.find()
          res.send(getData)
      } catch (error) {
              res.send(error)
      }
  })


module.exports = router