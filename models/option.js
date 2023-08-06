const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    linkToVote: {
      type: String,
    },
    question: {
      type: mongoose.Schema.ObjectId,
      ref: "Question",
    },
  },
  {
    timestamps: true,
  }
);

const Option = mongoose.model("Option", optionSchema);
module.exports = Option;
