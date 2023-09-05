const { parseFormData } = require("pechkin");

module.exports = function pechkinFileUpload(
  config,
  fileFieldConfigOverride,
  busboyConfig
) {
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
};
