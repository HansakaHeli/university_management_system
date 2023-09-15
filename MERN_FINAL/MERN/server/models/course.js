const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId:{
    type: String,
    required: true,
  },
  coursename: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  day: {
    type:String,
    required: true,
  },
  duration:{
    type:Number,
    required: true,
  }
});
module.exports = mongoose.model("courses", CourseSchema);

