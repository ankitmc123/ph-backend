const User = require("../modals/User");
const otpRoutes = require("express").Router();
const bcrypt = require("bcrypt");
const sendOtp = require("../utils/otp");

otpRoutes.post("/send", async (req, res) => {
    const mobile = req.body.mobile;
    const otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    // await sendOtp(mobile, otp)
    const oldUser = await User.findOne({ mobile: mobile });
    const newUser = oldUser || new User({ mobile });
    newUser.otp = otp;
    const result = await newUser.save();
    res.json({ id: result._id });
});

otpRoutes.post("/verify", async (req, res) => {
    const oldUser = await User.findById(req.body.id);
    if (req.body.otp && oldUser.otp && req.body.otp === oldUser.otp) {
        oldUser.name = req.body.name;
        oldUser.profile = req.body.profile;
        oldUser.otp = undefined;
        oldUser.password = await bcrypt.hash(req.body.password, 10);
        await oldUser.save();
        res.json({ a: "otp verified..." });
    } else {
        res.json({ a: "otp verification failed..." });
    }
});

module.exports = otpRoutes;
