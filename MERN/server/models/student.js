const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String
  },
  Tele_no: {
    type: Number,
    required: true,
  },
  birthDay: {
    type:String
  },
  email:{
    type:String
  }
});
module.exports = mongoose.model("Students", studentSchema);


