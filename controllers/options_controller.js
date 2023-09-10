const Option = require("../models/option");

module.exports.destroy = async (req, res) => {
  const id = req.params.id;
  try {
    await Option.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Option deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error deleting option",
    });
  }
};

module.exports.addVote = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const option = await Option.findById(id);
    option.votes += 1;
    option.save();
    return res.status(200).json({
      message: "Voted Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error cannot add vote",
    });
  }
};
