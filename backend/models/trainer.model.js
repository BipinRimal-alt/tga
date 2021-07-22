const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainerSchema = new Schema(
  {
    username: {
      type: string,
    },
    password: {
      type: string,
    },
    clients: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
