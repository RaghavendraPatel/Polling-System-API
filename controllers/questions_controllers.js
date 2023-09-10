const Question = require("../models/question");
const Option = require("../models/option");

module.exports.create = async (req, res) => {
  try {
    const description = req.body.description;

    await Question.create({ description });
    return res.status(200).json({
      message: "Question created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error creating question",
    });
  }
};

module.exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({})
      .populate("options", {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        question: 0,
      })
      .select({ __v: 0, createdAt: 0, updatedAt: 0 });
    return res.status(200).json({
      questions,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching question",
    });
  }
};

module.exports.getQuestion = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const question = await Question.findById(id)
      .populate("options", {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        question: 0,
      })
      .select({ __v: 0, createdAt: 0, updatedAt: 0 });
    console.log(question);
    return res.status(200).json({
      question,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching question",
    });
  }
};

module.exports.destroy = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Option.deleteMany({ question: id });
    await Question.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Question deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error bdeleting question",
    });
  }
};

module.exports.addOption = async (req, res) => {
  const id = req.params.id;
  try {
    const question = await Question.findById(id);
    const options = req.body.options.split(",");
    for (let option of options) {
      const currOption = await Option.create({
        description: option,
        question: id,
      });
      currOption.linkToVote = `${process.env.API_URL}/option/add-vote/${currOption.id}`;
      currOption.save();
      question.options.push(currOption.id);
    }
    question.save();

    return res.status(200).json({
      message: "Options added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error adding options",
    });
  }
};
