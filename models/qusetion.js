const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    options: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Qusetion = mongoose.model("Question", questionSchema);
model.exports = Qusetion;
