require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.APP_PORT || 5500;

app.get("/",(req,res) => {
    res.json({
        success: 1,
        message : "working correctly"
    })
})

app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});



