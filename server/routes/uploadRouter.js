const express = require("express");
const router = express.Router();
const { parseFormData } = require("pechkin");

const { uploader } = require("../controllers/uploadController");

function pechkinFileUpload(config, fileFieldConfigOverride, busboyConfig) {
  return async (req, res, next) => {
    try {
      const { fields, files } = await parseFormData(
        req,
        config,
        fileFieldConfigOverride,
        busboyConfig
      );

      req.body = fields;
      req.files = files;

      return next();
    } catch (err) {
      return next(err);
    }
  };
}

router.post("/", pechkinFileUpload(), (req, res) => uploader(req, res));

module.exports = router;
