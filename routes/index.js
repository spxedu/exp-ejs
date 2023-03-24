const { render } = require("ejs");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var up = multer({ dest: "./tmp" }).single("abc");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hêllo 22222" });
});

router.post("/", up, (req, res, next) => {
  console.log(req.file);
});

module.exports = router;
