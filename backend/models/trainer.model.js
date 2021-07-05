const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainernSchema = new Schema(
  {
    username: {
      type: string,
    },
    password: {
      string,
    },
    clients: {
      array,
    },
  },
  {
    timestamps: true,
  }
);

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
