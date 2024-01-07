const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: "Ankit"
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: String,
        required: false
    },
    otp: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
