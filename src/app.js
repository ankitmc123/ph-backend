require("dotenv").config();
const express = require("express");
const User = require("../modals/User");
const otpRoutes = require("./otpRoutes");
require("../modals/connect");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/otp", otpRoutes);

app.post("/add-friend", (req, res) => {
    res.json({});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
