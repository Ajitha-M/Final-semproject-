const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      default: "student",
      enum: ["student", "admin"],
    },
    mobileNo: {
      type: Number,
      required: true,
      unique: true,
    },
    whatsappNo:{
      type: Number,
      required: true,
      unique: true,

    },
    password: { type: String, required: true },
    regNo: { type: String, required: false },
    dept: { type: String, required: true },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
