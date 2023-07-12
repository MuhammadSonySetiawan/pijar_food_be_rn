const model = require("../../models");

module.exports = {
  getSingleRecipe: async (req, res) => {
    try {
      const { id } = req.params;
      const request = await model.recipes.findOne({
        where: { id },
      });

      res.status(200).json({
        status: "SUCCESS",
        messages: "Success get single recipe",
        data: request,
      });
    } catch (error) {
      res.status(401).json({
        status: "ERROR",
        messages: error.message,
        data: null,
      });
    }
  },
  getAllRecipe: async (req, res) => {
    try {
      const request = await model.recipes.findAll();

      res.status(200).json({
        status: "SUCCESS",
        messages: "Success get all recipe",
        data: request,
      });
    } catch (error) {
      res.status(401).json({
        status: "ERROR",
        messages: error.message,
        data: null,
      });
    }
  },
};
