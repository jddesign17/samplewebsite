const express = require("express");
const router = express.Router();
const TeacherModel = require("../models/teacher");

router.get("/teachers", async (req, res) => {
  try {
    const getData = await TeacherModel.find();
    res.send(getData);
  } catch (error) {}
});

router.post("/teacherpost", async (req, res) => {
  const { first_name, last_name, age, subject, teacher_id, class_hours } =
    req.body;
  const teacher = new TeacherModel({
    first_name,
    last_name,
    age,
    subject,
    teacher_id,
    class_hours,
  });
  const savedData = await teacher.save();
  res.send(savedData);
});

module.exports = router;
