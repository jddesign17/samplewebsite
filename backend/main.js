const express = require("express");
const mongoose = require("mongoose");
const app = express();
const StudentRouter = require("./routers/student");
const TeacherRouter = require("./routers/teacher")

mongoose
  .connect("mongodb://localhost:27017/nodejs")
  .then(() => console.log("DB is Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api',StudentRouter)
app.use('/api',TeacherRouter)

app.listen(3000, () => console.log("Server Is Running"));
