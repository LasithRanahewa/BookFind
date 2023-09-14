const express = require("express");
const router = express.Router();

const { parseFormData } = require("pechkin");
const fs = require("fs");
const path = require("path");

const uploader = async (req, res) => {
  const files = [];
  for await (const { stream, field, filename } of req.files) {
    try {
      const fileExtension = path.extname(filename);
      const uniqueFilename = `${Date.now()}${fileExtension}`;
      const filePath = path.join(
        __dirname,
        "../../client/public/uploads",
        uniqueFilename
      );
      if (!fs.existsSync(path.join(__dirname, "../../client/public/uploads"))) {
        fs.mkdirSync(path.join(__dirname, "../../client/public/uploads"));
      }
      const writeStream = fs.createWriteStream(filePath);
      stream.pipe(writeStream);
      await new Promise((resolve, reject) => {
        writeStream.on("finish", resolve);
        writeStream.on("error", reject);
      });
      files.push({ field, filename: uniqueFilename, filePath });
    } catch (err) {
      console.error("Error saving file:", err);
    } finally {
      stream.resume();
    }
  }
  return res.json(files);
};

module.exports = { uploader };
