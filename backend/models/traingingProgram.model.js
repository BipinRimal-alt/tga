const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rainingProgramSchema = new Schema(
  {
    programs: {
      array,
    },
  },
  {
    timestamps: true,
  }
);

const TrainingProgram = mongoose.model(
  "TrainingProgram",
  trainingProgramSchema
);

module.exports = TrainingProgram;
