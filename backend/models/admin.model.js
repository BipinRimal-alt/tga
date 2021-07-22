const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: {
      type: string,
      required: true,
    },
    password: {
      type: string,
      required: true
    },
    role: {
      type: string,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
