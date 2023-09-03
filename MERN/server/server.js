const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
//middle routes
//const postRoutes = require("./routes/student");
const studentRouter = require("./routes/student");
// app middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// rout middleware
app.use("/student",studentRouter);

const PORT = 8080;

const DB_URL =`mongodb+srv://mernproject2023:Mern@cluster0.mmwimf0.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});



