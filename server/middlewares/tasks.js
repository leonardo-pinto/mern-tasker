const { body } = require("express-validator");
const { validationResult } = require("express-validator");

exports.validateTask = [
  body("title").not().isEmpty().withMessage("Task title should not be empty"),
  body("status").not().isEmpty().withMessage("Status should not be empty"),
  body("date").not().isEmpty().withMessage("Date format is not valid"),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
  },
];