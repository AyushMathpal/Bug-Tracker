const express = require("express");
require("dotenv").config();
const { connectDB } = require("./controllers/userLogin");
const { connect } = require("mongoose");
const cors = require("cors");
4;
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true, // Allow credentials (cookies) to be sent
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);
connectDB();

const route = require("./routes/routes");

app.use("/api/user", route);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
