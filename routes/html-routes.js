const path = require("path");
const db = require("../models");
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};
