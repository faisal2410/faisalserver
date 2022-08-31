const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors');
require("dotenv").config();
const {readdirSync}=require("fs")

// DB Connection
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

  // middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes middleware
readdirSync("./routes").map(r=>app.use("/api",require(`./routes/${r}`)))
  
  // port
  const port = process.env.PORT || 8000;
  
  app.listen(port, () => console.log(`Server is running on port ${port}`));
