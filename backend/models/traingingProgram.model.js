const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainingProgramSchema = new Schema(
  {
    programs: {
      Athletic: {
        type: Array,
      },
      BodyBuilding: {
        type: Array,
      },
      FullBody: {
        type: Array,
      },
      Specialize: {
        type: Array,
      },
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
